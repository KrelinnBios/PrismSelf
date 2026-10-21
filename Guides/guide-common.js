// 全景指南共享逻辑：把 Typora 导出的正文按 H2/H3 重排为卡片版式，并生成快速目录与浮动目录。
(function () {
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  const textOf = (node) => (node && node.textContent ? node.textContent.trim() : '');

  // 卡片内的 h2–h6 按出现过的层级重新编号（1、1.1、1.1.1 …）
  const numberHeadings = (desc) => {
    const headingEls = Array.from(desc.querySelectorAll('h2, h3, h4, h5, h6'));
    if (!headingEls.length) return;

    const levelOf = (h) => Number(String(h.tagName || '').slice(1));
    const distinct = Array.from(new Set(headingEls.map(levelOf).filter(Number.isFinite))).sort((a, b) => a - b);
    for (const h of headingEls) {
      const index = distinct.indexOf(levelOf(h));
      if (index >= 0) h.dataset.level = String(index + 1);
    }

    const counts = [0, 0, 0, 0, 0];
    for (const h of headingEls) {
      const level = Number(h.dataset.level);
      if (!Number.isFinite(level) || level < 1 || level > counts.length) continue;
      counts[level - 1] += 1;
      for (let i = level; i < counts.length; i += 1) counts[i] = 0;
      const firstEl = h.firstElementChild;
      if (firstEl && firstEl.classList && firstEl.classList.contains('card-num')) firstEl.remove();
      h.insertBefore(el('span', 'card-num', `${counts.slice(0, level).join('.')} `), h.firstChild);
    }
  };

  const createCard = ({ title, nodes, highlight }) => {
    const card = el('div', highlight ? 'term-card highlight' : 'term-card');
    card.appendChild(el('div', 'term-corner'));
    card.appendChild(el('span', 'term-en', title));
    const desc = el('div', 'term-desc');
    for (const n of nodes) desc.appendChild(n);
    card.appendChild(desc);
    numberHeadings(desc);
    return card;
  };

  // 从 H2 标题提取副标题短语：去掉编号前缀与冒号后的说明
  const normalizeH2Label = (title) => {
    const t = (title || '').trim();
    if (!t) return '';
    const withoutPrefix = t.replace(/^([一二三四五六七八九十]+、|\d+\.|\d+、)\s*/, '');
    return withoutPrefix.split('：')[0].split(':')[0].trim();
  };

  const buildHeaderSub = (sections) => {
    const unique = [];
    for (const p of sections.map((s) => normalizeH2Label(s.title)).filter(Boolean)) {
      if (!unique.includes(p)) unique.push(p);
      if (unique.length >= 6) break;
    }
    return unique.join(' · ');
  };

  const applyAccentTitle = (h, rawTitle) => {
    const suffix = '全景指南';
    const index = rawTitle.lastIndexOf(suffix);
    if (index < 0) {
      h.appendChild(document.createTextNode(rawTitle));
      return;
    }
    const before = rawTitle.slice(0, index);
    if (before) h.appendChild(document.createTextNode(before));
    h.appendChild(el('span', 'title-guide-suffix', suffix));
  };

  // 以 H2 切分章节；首个标题含“目录”的章节视为手写目录单独保留
  const splitSections = (children) => {
    const sections = [];
    let manualToc = null;
    for (let i = 0; i < children.length; i += 1) {
      const node = children[i];
      if (!node || node.tagName !== 'H2') continue;
      let end = children.length;
      for (let j = i + 1; j < children.length; j += 1) {
        if (children[j].tagName === 'H2') {
          end = j;
          break;
        }
      }
      const section = { id: node.id, title: textOf(node), nodes: children.slice(i + 1, end) };
      if (!sections.length && !manualToc && /目录/.test(section.title)) manualToc = section;
      else sections.push(section);
      i = end - 1;
    }
    return { sections, manualToc };
  };

  const buildIntro = (config, sections, manualToc) => {
    const intro = el('section', 'intro-section');
    if (config.introHtml) {
      const p = document.createElement('p');
      p.innerHTML = config.introHtml;
      intro.appendChild(p);
    } else {
      // 默认把第一章开头的两段移入导语
      const introParas = sections[0].nodes.filter((n) => n && n.tagName === 'P').slice(0, 2);
      if (introParas.length) {
        sections[0].nodes = sections[0].nodes.filter((n) => !introParas.includes(n));
        for (const p of introParas) intro.appendChild(p);
      }
    }
    intro.appendChild(el('div', 'divider'));
    intro.appendChild(el('div', 'category-title', '快速目录 · Quick Navigation'));

    const tocCards = el('div', 'terms-grid toc-grid');
    const tocHighlights = config.tocHighlights || [];
    sections.forEach((s, idx) => {
      const a = document.createElement('a');
      a.className = tocHighlights.includes(idx) ? 'term-card toc-card highlight' : 'term-card toc-card';
      a.href = s.id ? `#${s.id}` : '#';
      a.appendChild(el('div', 'term-corner'));
      a.appendChild(el('span', 'term-en', String(idx + 1).padStart(2, '0') + ' · ' + (config.tocLabels[idx] || '')));
      a.appendChild(el('span', 'term-zh', s.title));
      a.appendChild(el('div', 'term-desc', config.tocDescriptions[idx] || ''));
      tocCards.appendChild(a);
    });
    intro.appendChild(tocCards);

    if (manualToc) {
      const manualWrap = el('div', 'terms-grid');
      const manualNodes = manualToc.nodes.filter((n) => n && n.tagName !== 'HR');
      manualWrap.appendChild(createCard({ title: manualToc.title, nodes: manualNodes, highlight: false }));
      intro.appendChild(manualWrap);
    }
    return intro;
  };

  // 默认高亮：概述、匹配关键词的小节、全文第一张卡，以及篇幅较短的结语/总结
  const defaultHighlight = (pattern) => ({ title, first, nodeCount }) =>
    title === '概述' || pattern.test(title) || first || (/结语|总结/.test(title) && nodeCount < 6);

  const buildMain = (config, sections) => {
    const highlightOf = config.highlight || defaultHighlight(config.highlightPattern || /定义/);
    const main = el('div', 'main-content');
    sections.forEach((s, sectionIndex) => {
      const sec = el('section', 'category-section');
      if (s.id) sec.id = s.id;
      sec.appendChild(el('div', 'category-title', s.title));

      const grid = el('div', 'terms-grid');
      const blocks = [];
      let buffer = [];
      let currentH3 = null;
      const flush = () => {
        if (!currentH3 && buffer.length === 0) return;
        blocks.push({ h3: currentH3, nodes: buffer });
        buffer = [];
        currentH3 = null;
      };
      for (const n of s.nodes) {
        if (!n || n.tagName === 'HR') continue;
        if (n.tagName === 'H3') {
          flush();
          currentH3 = n;
          continue;
        }
        buffer.push(n);
      }
      flush();

      blocks.forEach((b, blockIndex) => {
        const title = b.h3 ? textOf(b.h3) : '概述';
        const highlight = highlightOf({ title, first: sectionIndex === 0 && blockIndex === 0, nodeCount: b.nodes.length });
        grid.appendChild(createCard({ title, nodes: b.nodes, highlight }));
      });

      sec.appendChild(grid);
      main.appendChild(sec);
    });
    return main;
  };

  const buildFloatingToc = (sections) => {
    const floating = el('div', 'floating-toc');
    const btn = el('button', 'toc-toggle-btn', '≡');
    btn.type = 'button';
    btn.setAttribute('aria-label', '打开目录');
    btn.setAttribute('aria-controls', 'guideTocPanel');
    btn.setAttribute('aria-expanded', 'false');

    const panel = el('div', 'toc-panel');
    panel.id = 'guideTocPanel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', '章节目录');
    panel.setAttribute('aria-hidden', 'true');

    const panelHeader = el('div', 'toc-panel-header');
    panelHeader.appendChild(el('span', '', '目录'));
    const closeIcon = el('span', 'toc-close-icon', '×');
    closeIcon.setAttribute('role', 'button');
    closeIcon.setAttribute('tabindex', '0');
    closeIcon.setAttribute('aria-label', '关闭目录');
    panelHeader.appendChild(closeIcon);
    panel.appendChild(panelHeader);

    const list = el('ul', 'toc-list');
    sections.forEach((s, idx) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = s.id ? `#${s.id}` : '#';
      a.appendChild(el('span', 'toc-index', String(idx + 1)));
      a.appendChild(el('span', 'toc-title', s.title));
      li.appendChild(a);
      list.appendChild(li);
    });
    panel.appendChild(list);

    const isOpen = () => panel.classList.contains('open');
    // 打开时把焦点移到当前章节链接，便于键盘用户直接选择
    const open = () => {
      panel.classList.add('open');
      panel.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-expanded', 'true');
      const target = list.querySelector('a[aria-current="true"]') || list.querySelector('a');
      if (target) target.focus({ preventScroll: true });
    };
    const close = ({ restoreFocus = false } = {}) => {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');
      if (restoreFocus) btn.focus();
    };

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isOpen()) close();
      else open();
    });
    closeIcon.addEventListener('click', (e) => {
      e.preventDefault();
      close({ restoreFocus: true });
    });
    closeIcon.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        close({ restoreFocus: true });
      }
    });
    list.addEventListener('click', (e) => {
      if (e.target && e.target.closest && e.target.closest('a')) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen()) close({ restoreFocus: panel.contains(document.activeElement) });
    });
    document.addEventListener('click', (e) => {
      if (!isOpen() || e.target === btn || panel.contains(e.target)) return;
      close();
    });
    // 焦点离开目录面板时自动收起，避免隐藏面板仍停留在 Tab 顺序中
    panel.addEventListener('focusout', (e) => {
      if (isOpen() && e.relatedTarget && !panel.contains(e.relatedTarget) && e.relatedTarget !== btn) close();
    });

    floating.appendChild(btn);
    floating.appendChild(panel);
    return { floating, panel };
  };

  const trackCurrentSection = (write, panel, sections) => {
    const tocLinks = Array.from(panel.querySelectorAll('a'));
    const sectionEls = Array.from(write.querySelectorAll('.category-section'));
    const byId = new Map(sectionEls.map((s) => [s.id, s]));
    const setCurrent = (id) => {
      tocLinks.forEach((a) => a.setAttribute('aria-current', 'false'));
      const found = tocLinks.find((a) => a.getAttribute('href') === `#${id}`);
      if (found) found.setAttribute('aria-current', 'true');
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1))[0];
          if (visible && visible.target && visible.target.id) setCurrent(visible.target.id);
        },
        { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0.01 }
      );
      for (const s of sectionEls) {
        if (s.id) observer.observe(s);
      }
    }

    const initialId = location.hash ? decodeURIComponent(location.hash.slice(1)) : sections[0] && sections[0].id;
    if (initialId && byId.has(initialId)) setCurrent(initialId);
  };

  function build(config) {
    const write = document.getElementById('write');
    if (!write) return;

    const originalElements = Array.from(write.children);
    const h1 = originalElements.find((n) => n.tagName === 'H1');
    const title = textOf(h1) || config.fallbackTitle;
    document.title = 'PrismSelf - ' + title;

    const { sections, manualToc } = splitSections(originalElements.filter((n) => n !== h1));
    if (!sections.length) return;

    const header = document.createElement('header');
    const h = document.createElement('h1');
    header.appendChild(el('div', 'header-label', config.headerLabel));
    applyAccentTitle(h, title.replace(/\s*\(.+?\)\s*$/, '').trim());
    header.appendChild(h);
    const headerSub = config.headerSub === 'auto' ? buildHeaderSub(sections) : config.headerSub;
    if (headerSub) header.appendChild(el('div', 'header-sub', headerSub));
    header.appendChild(el('div', 'header-ornament'));

    const intro = buildIntro(config, sections, manualToc);
    const main = buildMain(config, sections);
    const { floating, panel } = buildFloatingToc(sections);

    write.innerHTML = '';
    write.appendChild(header);
    write.appendChild(intro);
    write.appendChild(main);
    write.appendChild(floating);

    trackCurrentSection(write, panel, sections);

    // 重排后 DOM 才有章节 id，需要手动跳到地址栏指定的锚点
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) target.scrollIntoView({ behavior: 'instant' });
    }
  }

  function init(config) {
    const run = () => {
      try {
        build(config);
      } finally {
        // 即使构建失败也要显示原文，避免页面停留在透明状态
        document.body.classList.remove('guide-building');
        document.body.classList.add('guide-ready');
      }
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run, { once: true });
    } else {
      run();
    }
  }

  window.PrismSelfGuide = { init };
})();
