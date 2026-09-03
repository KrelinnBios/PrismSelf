/* Shared, opt-in AI companion for guide and scale pages. */
(function () {
  'use strict';

  if (window.__prismAiCompanionLoaded) return;
  window.__prismAiCompanionLoaded = true;

  var MAX_QUESTION_LENGTH = 300;
  var MAX_CONTEXT_LENGTH = 8500;
  var MAX_CHUNK_LENGTH = 1300;
  var MAX_CHUNKS = 280;
  var isScale = Boolean(window.PRISM_SCALE_CONFIG) || /^\/Scales\//.test(window.location.pathname);
  var activeController = null;
  var history = [];
  var chunks = [];
  var root = null;
  var selectedText = '';

  function normalizeText(value) {
    return String(value || '')
      .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
      .replace(/[ \t\f\v]+/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function normalizeAssistantText(value) {
    return normalizeText(value)
      .replace(/^```[^\n]*\n?/gm, '')
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/^\s*(?:[-*_]\s*){3,}$/gm, '')
      .replace(/^\s*[-*+]\s+/gm, '• ')
      .replace(/\[([^\]\n]+)\]\([^\)\n]+\)/g, '$1')
      .replace(/\*\*([^*\n]+)\*\*/g, '$1')
      .replace(/__([^_\n]+)__/g, '$1')
      .replace(/`([^`\n]+)`/g, '$1')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function splitText(value, maxLength) {
    var text = normalizeText(value);
    if (!text) return [];
    if (text.length <= maxLength) return [text];

    var sentences = text.match(/[^。！？；.!?]+[。！？；.!?]?/g) || [text];
    var parts = [];
    var current = '';

    sentences.forEach(function (sentence) {
      var item = sentence.trim();
      if (!item) return;
      if (item.length > maxLength) {
        if (current) parts.push(current);
        current = '';
        for (var start = 0; start < item.length; start += maxLength) {
          parts.push(item.slice(start, start + maxLength));
        }
        return;
      }
      if (current && current.length + item.length > maxLength) {
        parts.push(current);
        current = item;
      } else {
        current += item;
      }
    });

    if (current) parts.push(current);
    return parts;
  }

  function pageTitle() {
    var title = normalizeText(document.title).replace(/\s*[|｜-]\s*PrismSelf\s*$/i, '');
    return title || (isScale ? '当前量表' : '当前指南');
  }

  function findArticleRoot() {
    return document.getElementById('write') ||
      document.querySelector('.main-content') ||
      document.querySelector('main') ||
      document.body;
  }

  function isExcluded(node) {
    return Boolean(node.closest(
      '.guide-ai-dialog, .guide-ai-launcher, .floating-toc, nav, script, style' +
      (isScale ? ', form, .scale-result, #result' : '')
    ));
  }

  function collectChunks() {
    root = findArticleRoot();
    if (!root) return [];

    var selector = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      '.category-title', '.term-zh', '.chapter-title',
      'p', 'li', 'blockquote'
    ].join(',');
    var nodes = Array.prototype.slice.call(root.querySelectorAll(selector));
    var result = [];
    var seen = new Set();
    var heading = pageTitle();

    nodes.some(function (node) {
      if (result.length >= MAX_CHUNKS) return true;
      if (isExcluded(node)) return false;
      if ((node.matches('li, blockquote')) && node.querySelector('p, li')) return false;

      var text = normalizeText(node.innerText || node.textContent);
      if (!text) return false;

      var headingLike = node.matches('h1, h2, h3, h4, h5, h6, .category-title, .term-zh, .chapter-title');
      if (headingLike) {
        heading = text.slice(0, 160);
        return false;
      }
      if (text.length < 16 || seen.has(text)) return false;
      seen.add(text);

      splitText(text, MAX_CHUNK_LENGTH).forEach(function (part) {
        if (result.length >= MAX_CHUNKS) return;
        result.push({
          index: result.length,
          heading: heading,
          text: part,
          search: normalizeText(heading + ' ' + part).toLowerCase()
        });
      });
      return false;
    });

    if (!result.length) {
      splitText(root.innerText || root.textContent, MAX_CHUNK_LENGTH).forEach(function (part, index) {
        result.push({ index: index, heading: pageTitle(), text: part, search: part.toLowerCase() });
      });
    }
    return result;
  }

  function tokensFor(question) {
    var source = normalizeText(question).toLowerCase();
    var ignored = new Set(['什么', '怎么', '怎样', '为何', '为什么', '可以', '是否', '这篇', '指南', '请问', '请你', '帮我', '解释', '概括', '一下', '哪些', '这个', '那个', '相关']);
    var output = [];
    var add = function (token) {
      if (token.length < 2 || ignored.has(token) || output.indexOf(token) >= 0) return;
      output.push(token);
    };

    (source.match(/[a-z0-9][a-z0-9+_.-]{1,}/g) || []).forEach(add);
    (source.match(/[\u3400-\u9fff]{2,}/g) || []).forEach(function (sequence) {
      if (sequence.length <= 8) add(sequence);
      for (var index = 0; index < sequence.length - 1 && output.length < 32; index += 1) {
        add(sequence.slice(index, index + 2));
        if (index < sequence.length - 2) add(sequence.slice(index, index + 3));
      }
    });
    return output.slice(0, 32);
  }

  function overviewChunks() {
    if (chunks.length <= 9) return chunks.slice();
    var indexes = new Set([0, 1]);
    var samples = 9;
    for (var sample = 0; sample < samples; sample += 1) {
      indexes.add(Math.round(sample * (chunks.length - 1) / (samples - 1)));
    }
    return Array.from(indexes).sort(function (a, b) { return a - b; }).map(function (index) {
      return chunks[index];
    });
  }

  function rankedChunks(question) {
    var tokens = tokensFor(question);
    if (!tokens.length) return overviewChunks();

    var ranked = chunks.map(function (chunk) {
      var heading = chunk.heading.toLowerCase();
      var score = 0;
      tokens.forEach(function (token) {
        if (chunk.search.indexOf(token) >= 0) score += Math.min(token.length, 6);
        if (heading.indexOf(token) >= 0) score += Math.min(token.length, 6) * 3;
      });
      return { chunk: chunk, score: score };
    }).sort(function (a, b) {
      return b.score - a.score || a.chunk.index - b.chunk.index;
    });

    var selected = ranked.filter(function (item) { return item.score > 0; }).slice(0, 8).map(function (item) {
      return item.chunk;
    });
    if (selected.length < 4) {
      overviewChunks().forEach(function (chunk) {
        if (selected.indexOf(chunk) < 0 && selected.length < 7) selected.push(chunk);
      });
    }
    return selected.sort(function (a, b) { return a.index - b.index; });
  }

  function readSelection() {
    var selection = window.getSelection ? window.getSelection() : null;
    if (!selection || selection.isCollapsed || !selection.anchorNode || !root || !root.contains(selection.anchorNode)) {
      selectedText = '';
      return selectedText;
    }
    selectedText = normalizeText(selection.toString()).slice(0, 2400);
    return selectedText;
  }

  function currentResultText() {
    if (!isScale) return '';
    var config = window.PRISM_SCALE_CONFIG || {};
    var result = document.getElementById(config.resultId || 'result');
    if (!result || result.hidden || window.getComputedStyle(result).display === 'none') return '';
    return normalizeText(result.innerText || result.textContent).slice(0, 4200);
  }

  function buildContext(question, mode) {
    var chosen = (mode === 'summary' || mode === 'reflect') ? overviewChunks() : rankedChunks(question);
    var parts = [];
    var length = 0;

    var resultText = currentResultText();
    if (resultText) {
      var resultPart = '【读者当前看到的量表结果】\n' + resultText;
      parts.push(resultPart);
      length += resultPart.length + 2;
    }

    if (mode === 'selection' && selectedText) {
      var selectionPart = '【读者选中的原文】\n' + selectedText;
      parts.push(selectionPart);
      length += selectionPart.length;
    }

    chosen.some(function (chunk, index) {
      var part = '【页面摘录 ' + (index + 1) + '｜' + chunk.heading + '】\n' + chunk.text;
      if (length + part.length + 2 > MAX_CONTEXT_LENGTH) return true;
      parts.push(part);
      length += part.length + 2;
      return false;
    });
    return parts.join('\n\n').slice(0, MAX_CONTEXT_LENGTH);
  }

  function iconMarkup() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3Z"></path><path d="m18.5 13 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"></path><path d="m5 13 1 2.8L9 17l-3 1.1L5 21l-1-2.9L1 17l3-1.2L5 13Z"></path></svg>';
  }

  function createElement(tag, className, text) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function buildInterface() {
    chunks = collectChunks();

    var launcher = createElement('button', 'guide-ai-launcher');
    launcher.type = 'button';
    launcher.setAttribute('aria-haspopup', 'dialog');
    launcher.setAttribute('aria-controls', 'guideAiDialog');
    launcher.setAttribute('aria-label', isScale ? '打开量表 AI 解读' : '打开指南 AI 陪读');
    launcher.title = isScale ? '量表 AI 解读' : '指南 AI 陪读';
    launcher.innerHTML = '<span aria-hidden="true">AI</span>';
    if (isScale) launcher.classList.add('guide-ai-launcher--scale');

    var isBdsmGuide = /\/Guides\/BDSM-Comprehensive-Guide(?:\.html)?\/?$/.test(window.location.pathname);
    if (isBdsmGuide) launcher.classList.add('guide-ai-launcher--bdsm');

    var dialog = createElement('dialog', 'guide-ai-dialog');
    dialog.id = 'guideAiDialog';
    dialog.setAttribute('aria-labelledby', 'guideAiTitle');
    if (isScale) dialog.classList.add('guide-ai-dialog--scale');
    if (isBdsmGuide) dialog.classList.add('guide-ai-dialog--bdsm');

    var eyebrow = isScale ? 'PrismSelf · Scale Interpretation' : 'PrismSelf · Guide Companion';
    var dialogTitle = isScale ? '量表 AI 解读' : '指南 AI 陪读';
    var closeLabel = isScale ? '关闭量表 AI 解读' : '关闭指南 AI 陪读';
    var notice = isScale
      ? '<strong>仅辅助理解。</strong>回答由 Cloudflare Workers AI 生成。只有点击发送后，问题、回答所需的本页说明和当前已显示的结果摘要才会提交；逐题选项不会提交，本站不保存对话。请避免填写姓名、联系方式等身份信息。回答不用于诊断或身份判定。'
      : '<strong>仅辅助理解。</strong>回答由 Cloudflare Workers AI 生成。只有点击发送后，问题和回答所需的本页摘录才会提交；本站不保存对话。请避免填写姓名、联系方式等身份信息。';
    var summaryPrompt = isScale
      ? '请概括这份量表的核心内容，并指出最容易误解的分数或使用边界。若已有结果，请同时概括结果中最值得关注的倾向。'
      : '请概括这篇指南的核心内容，并指出最容易被误解的地方。';
    var comparePrompt = isScale
      ? '请梳理这份量表中最重要的维度，并比较容易混淆的维度或概念。若已有结果，请结合结果说明维度之间的关系。'
      : '请梳理这篇指南中最重要的概念，并比较容易混淆的概念。';
    var reflectPrompt = isScale
      ? '请根据这份量表及当前结果（如有）提出 5 个不带诊断性、不替我定型的自我思考问题。'
      : '请根据这篇指南提出 5 个不带诊断性的自我思考问题。';
    var selectionPrompt = isScale
      ? '请用通俗、准确的中文解释我选中的量表说明或结果文字，并保留必要语境。'
      : '请用通俗、准确的中文解释我选中的原文，并保留必要语境。';
    var presets = [
      '    <button class="guide-ai-preset" type="button" data-mode="summary" data-prompt="' + summaryPrompt + '">概括本页</button>',
      '    <button class="guide-ai-preset" type="button" data-mode="compare" data-prompt="' + comparePrompt + '">概念辨析</button>',
      '    <button class="guide-ai-preset" type="button" data-mode="reflect" data-prompt="' + reflectPrompt + '">思考问题</button>',
      '    <button class="guide-ai-preset" type="button" data-mode="selection" data-prompt="' + selectionPrompt + '" disabled>解释选中内容</button>'
    ].join('');

    dialog.innerHTML = [
      '<div class="guide-ai-shell">',
      '  <header class="guide-ai-header">',
      '    <div class="guide-ai-heading"><p class="guide-ai-eyebrow">' + eyebrow + '</p><h2 class="guide-ai-title" id="guideAiTitle">' + dialogTitle + '</h2></div>',
      '    <button class="guide-ai-close" type="button" aria-label="' + closeLabel + '"><svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M6 6l12 12M18 6L6 18"></path></svg></button>',
      '  </header>',
      '  <p class="guide-ai-notice">' + notice + '</p>',
      '  <div class="guide-ai-conversation">',
      '    <div class="guide-ai-messages" role="log" aria-live="polite" aria-relevant="additions"></div>',
      '  </div>',
      '  <form class="guide-ai-form">',
      '    <div class="guide-ai-presets" aria-label="快捷提问">',
      presets,
      '    </div>',
      '    <div class="guide-ai-composer">',
      '      <textarea class="guide-ai-input" rows="2" maxlength="' + MAX_QUESTION_LENGTH + '" aria-label="向' + dialogTitle + '提问" placeholder="围绕当前' + (isScale ? '量表或结果' : '指南') + '提问……"></textarea>',
      '      <div class="guide-ai-form-meta">',
      '        <span><span class="guide-ai-count">0</span>/' + MAX_QUESTION_LENGTH + '<span class="guide-ai-shortcut"> · Enter 发送，Shift+Enter 换行</span></span>',
      '        <span class="guide-ai-form-actions"><button class="guide-ai-clear" type="button">清空对话</button><button class="guide-ai-send" type="submit" disabled>发送 <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.2 2.5 14 8 2.2 13.5l1.3-4.4L9.2 8 3.5 6.9 2.2 2.5Z" fill="currentColor"/></svg></button></span>',
      '      </div>',
      '    </div>',
      '  </form>',
      '</div>'
    ].join('');

    var scaleToolbar = isScale && document.querySelector('.global-progress');
    if (scaleToolbar) {
      scaleToolbar.classList.add('scale-mobile-toolbar');
      scaleToolbar.prepend(launcher);
    } else {
      document.body.prepend(launcher);
    }
    document.body.appendChild(dialog);

    var closeButton = dialog.querySelector('.guide-ai-close');
    var clearButton = dialog.querySelector('.guide-ai-clear');
    var input = dialog.querySelector('.guide-ai-input');
    var sendButton = dialog.querySelector('.guide-ai-send');
    var form = dialog.querySelector('.guide-ai-form');
    var count = dialog.querySelector('.guide-ai-count');
    var contextButton = dialog.querySelector('[data-mode="selection"]');

    function updateInput() {
      if (input.value.length > MAX_QUESTION_LENGTH) input.value = input.value.slice(0, MAX_QUESTION_LENGTH);
      count.textContent = String(input.value.length);
      sendButton.disabled = !normalizeText(input.value) || Boolean(activeController);
    }

    function updateContextAction() {
      readSelection();
      contextButton.disabled = !selectedText || Boolean(activeController);
      contextButton.title = selectedText
        ? '解释当前选中的' + (isScale ? '量表说明或结果文字' : '指南原文')
        : '请先在' + (isScale ? '量表页面' : '指南正文') + '中选择一段文字';
    }

    function openDialog() {
      updateContextAction();
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
      window.setTimeout(function () { input.focus(); }, 0);
    }

    function closeDialog() {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
      launcher.focus();
    }

    launcher.addEventListener('click', openDialog);
    closeButton.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      closeDialog();
    });
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) closeDialog();
    });
    dialog.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      closeDialog();
    });
    input.addEventListener('input', updateInput);
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        if (!sendButton.disabled) form.requestSubmit();
      }
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      submitQuestion(dialog, normalizeText(input.value), 'question');
      input.value = '';
      updateInput();
    });

    dialog.querySelectorAll('.guide-ai-preset').forEach(function (button) {
      button.addEventListener('click', function () {
        if (button.disabled) return;
        submitQuestion(dialog, button.dataset.prompt, button.dataset.mode);
      });
    });

    clearButton.addEventListener('click', function () {
      if (activeController) activeController.abort();
      history = [];
      dialog.querySelector('.guide-ai-messages').innerHTML = '';
      addWelcome(dialog);
      updateInput();
      updateContextAction();
    });


    addWelcome(dialog);
    updateInput();
    updateContextAction();
  }

  function addMessage(dialog, role, text, state) {
    var messages = dialog.querySelector('.guide-ai-messages');
    var conversation = dialog.querySelector('.guide-ai-conversation');
    var message = createElement('article', 'guide-ai-message');
    message.dataset.role = role;
    if (state) message.dataset.state = state;
    message.appendChild(createElement('div', 'guide-ai-message-label', role === 'user' ? '你' : (isScale ? 'AI 解读' : 'AI 陪读')));
    message.appendChild(createElement('div', 'guide-ai-message-body', text));
    messages.appendChild(message);
    conversation.scrollTop = conversation.scrollHeight;
    return message;
  }

  function addWelcome(dialog) {
    addMessage(
      dialog,
      'assistant',
      isScale
        ? '你好，我可以根据《' + pageTitle() + '》帮你梳理量表、比较概念，并在你生成结果后提供不带诊断性、不替你定型的解读。你也可以选中页面说明或结果文字，再让我解释。'
        : '你好，我可以根据《' + pageTitle() + '》帮你梳理、解释和比较概念。你也可以先在正文中选中一段文字，再让我解释。'
    );
  }

  function addThinking(dialog) {
    var message = addMessage(dialog, 'assistant', '');
    message.dataset.state = 'thinking';
    message.querySelector('.guide-ai-message-body').innerHTML = '<span class="guide-ai-thinking" aria-label="正在生成回答"><i></i><i></i><i></i></span>';
    return message;
  }

  function setBusy(dialog, busy) {
    dialog.querySelector('.guide-ai-send').disabled = busy || !normalizeText(dialog.querySelector('.guide-ai-input').value);
    dialog.querySelectorAll('.guide-ai-preset').forEach(function (button) {
      button.disabled = busy || (button.dataset.mode === 'selection' && !selectedText);
    });
  }

  function friendlyError(status, payload) {
    if (status === 429) return '请求有些频繁，请稍后再试。免费额度有限，感谢理解。';
    if (status === 503 && payload && payload.code === 'AI_BINDING_MISSING') return (isScale ? 'AI 解读' : 'AI 陪读') + '还在完成部署配置，请稍后再试。';
    if (status === 503) return 'AI 服务暂时不可用，可能是今日免费额度已用完，请稍后或明天再试。';
    if (status === 400) return (payload && payload.message) || '这次问题没有成功提交，请缩短内容后再试。';
    return '这次没有成功生成回答，请稍后再试。';
  }

  async function submitQuestion(dialog, question, mode) {
    if (!question || activeController) return;
    if (mode === 'selection') readSelection();

    var priorHistory = history.slice(-4);
    var context = buildContext(question, mode);
    addMessage(dialog, 'user', question);
    var thinking = addThinking(dialog);
    activeController = new AbortController();
    var timeout = window.setTimeout(function () { activeController.abort(); }, 35000);
    setBusy(dialog, true);

    try {
      var response = await fetch('/api/guide-ai', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          page: window.location.pathname,
          question: question,
          context: context,
          history: priorHistory
        }),
        signal: activeController.signal
      });
      var payload = await response.json().catch(function () { return {}; });
      if (!response.ok) throw { status: response.status, payload: payload };

      var answer = normalizeAssistantText(payload.answer);
      if (!answer) throw { status: 502, payload: {} };
      thinking.querySelector('.guide-ai-message-body').textContent = answer;
      thinking.removeAttribute('data-state');
      history.push({ role: 'user', content: question }, { role: 'assistant', content: answer });
      history = history.slice(-6);
    } catch (error) {
      var message = error && error.name === 'AbortError'
        ? '等待时间较长，本次请求已停止。请缩短问题后再试。'
        : friendlyError(error && error.status, error && error.payload);
      thinking.dataset.state = 'error';
      thinking.querySelector('.guide-ai-message-body').textContent = message;
    } finally {
      window.clearTimeout(timeout);
      activeController = null;
      setBusy(dialog, false);
    }
  }

  window.addEventListener('pagehide', function () {
    if (activeController) activeController.abort();
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildInterface);
  else buildInterface();
})();
