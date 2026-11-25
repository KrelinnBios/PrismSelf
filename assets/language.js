/* Lightweight, local-only Simplified/Traditional Chinese display preference.
 * Follows browser preferences unless the reader has chosen a language. */
(function () {
  var root = document.documentElement;
  var key = 'prismself-language';
  if (!window.OpenCC || typeof window.OpenCC.Converter !== 'function') return;
  var traditionalConverter = null;
  var simplifiedConverter = null;
  function traditional(text) {
    if (!traditionalConverter) traditionalConverter = window.OpenCC.Converter({ from: 'cn', to: 't' });
    return traditionalConverter(text);
  }
  function simplified(text) {
    if (!simplifiedConverter) simplifiedConverter = window.OpenCC.Converter({ from: 't', to: 'cn' });
    return simplifiedConverter(text);
  }

  var originals = new WeakMap();
  var originalAttributes = new WeakMap();
  var originalTitle = document.title;
  var metadata = Array.from(document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]'))
    .map(function (meta) { return { element: meta, content: meta.getAttribute('content') || '' }; });
  var button = document.getElementById('languageToggle');
  var textAttributes = ['aria-label', 'placeholder', 'title', 'alt', 'data-label', 'data-alt', 'data-placeholder'];
  var textAttributeSelector = textAttributes.map(function (name) { return '[' + name + ']'; }).join(',');
  var preserveSelector = 'script,style,pre,code,textarea,[contenteditable],[data-lang-preserve]';
  var hanPattern = /[\u4e00-\u9fff]/;
  var hasConverted = false;

  function toTraditionalText(text) {
    return hanPattern.test(text) ? traditional(text) : text;
  }

  function browserLanguage() {
    var languages = navigator.languages && navigator.languages.length
      ? navigator.languages : [navigator.language || ''];
    for (var i = 0; i < languages.length; i += 1) {
      var parts = languages[i].toLowerCase().split('-');
      if (parts[0] !== 'zh') continue;
      if (/^hant(?:-|$)/.test(parts.slice(1).join('-'))) return 'zh-Hant';
      if (/^hans(?:-|$)/.test(parts.slice(1).join('-'))) return 'zh-CN';
      return /^(tw|hk|mo)$/.test(parts[1]) ? 'zh-Hant' : 'zh-CN';
    }
    return 'zh-CN';
  }

  function translate(value) {
    var text = String(value == null ? '' : value);
    return root.lang === 'zh-Hant' ? toTraditionalText(text) : text;
  }

  function convertTextNode(node, language) {
    if (!node.parentElement || node.parentElement.closest(preserveSelector)) return;
    var current = node.nodeValue;
    var saved = originals.get(node);
    var original = saved && current === saved.displayed ? saved.original : current;
    var displayed = language === 'zh-Hant' ? toTraditionalText(original) : original;
    originals.set(node, { original: original, displayed: displayed });
    if (current !== displayed) node.nodeValue = displayed;
  }

  function convertNode(node, language) {
    if (node.nodeType === Node.TEXT_NODE) {
      convertTextNode(node, language);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || node.closest(preserveSelector)) return;
    var walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
    var textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(function (textNode) { convertTextNode(textNode, language); });

    convertAttributes(node, language);
    node.querySelectorAll(textAttributeSelector).forEach(function (element) {
      convertAttributes(element, language);
    });
  }

  function convertAttributes(node, language) {
    if (node === button || node.closest(preserveSelector)) return;
    var savedAttributes = originalAttributes.get(node) || {};
    textAttributes.forEach(function (name) {
      var current = node.getAttribute(name);
      if (current === null) {
        delete savedAttributes[name];
        return;
      }
      var saved = savedAttributes[name];
      var original = saved && current === saved.displayed ? saved.original : current;
      var displayed = language === 'zh-Hant' ? toTraditionalText(original) : original;
      savedAttributes[name] = { original: original, displayed: displayed };
      if (current !== displayed) node.setAttribute(name, displayed);
    });
    originalAttributes.set(node, savedAttributes);
  }

  function updateButton(language) {
    if (!button) return;
    var current = language === 'zh-Hant' ? '繁體' : '简体';
    button.innerHTML = '<span class="header-link-mark" aria-hidden="true">🌐</span>' + current;
    button.setAttribute('aria-label', language === 'zh-Hant'
      ? '目前語言：繁體中文；點擊切換為簡體中文'
      : '当前语言：简体中文；点击切换为繁體中文');
    button.removeAttribute('aria-pressed');
  }

  function setLanguage(language, persist) {
    language = language === 'zh-Hant' ? 'zh-Hant' : 'zh-CN';
    root.lang = language;
    if (language === 'zh-Hant' || hasConverted) {
      hasConverted = true;
      convertNode(document.body, language);
      document.title = language === 'zh-Hant' ? toTraditionalText(originalTitle) : originalTitle;
      metadata.forEach(function (item) {
        item.element.setAttribute('content', language === 'zh-Hant' ? toTraditionalText(item.content) : item.content);
      });
    }
    updateButton(language);
    if (persist) {
      try { localStorage.setItem(key, language); } catch (e) {}
    }
    document.dispatchEvent(new CustomEvent('prismself:languagechange', { detail: { language: language } }));
  }

  if (typeof window.alert === 'function') {
    var nativeAlert = window.alert.bind(window);
    window.alert = function (message) {
      return nativeAlert(message === undefined ? undefined : translate(message));
    };
  }
  if (typeof window.confirm === 'function') {
    var nativeConfirm = window.confirm.bind(window);
    window.confirm = function (message) {
      return nativeConfirm(message === undefined ? undefined : translate(message));
    };
  }

  var preference;
  try { preference = localStorage.getItem(key); } catch (e) {}
  if (preference !== 'zh-CN' && preference !== 'zh-Hant') preference = null;
  setLanguage(preference || browserLanguage(), false);

  if (button) {
    button.addEventListener('click', function () {
      preference = root.lang === 'zh-Hant' ? 'zh-CN' : 'zh-Hant';
      setLanguage(preference, true);
    });
  }

  var observer = new MutationObserver(function (records) {
    if (root.lang !== 'zh-Hant') return;
    records.forEach(function (record) {
      if (record.type === 'attributes') convertAttributes(record.target, root.lang);
      else if (record.type === 'characterData') {
        var textNode = record.target;
        var saved = originals.get(textNode);
        if (saved && textNode.nodeValue === saved.displayed) return;
        convertTextNode(textNode, root.lang);
      } else {
        record.addedNodes.forEach(function (node) {
          if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
            convertNode(node, root.lang);
          }
        });
      }
    });
  });
  observer.observe(document.body, {
    subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: textAttributes
  });

  window.PrismSelfLanguage = {
    get language() { return root.lang; },
    get isTraditional() { return root.lang === 'zh-Hant'; },
    translate: translate,
    toSimplified: simplified,
    toTraditional: traditional
  };
})();
