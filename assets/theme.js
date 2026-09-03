/* Site-wide theme controller.
 * - Sets data-theme before paint (stored choice wins over the OS preference).
 * - Injects a fixed sun/moon toggle button and persists the choice in
 *   localStorage, so a manual choice carries across every page (same origin).
 * - While no manual choice exists, follows live OS theme changes.
 * Load this in <head> (blocking) so the theme is applied before first paint. */
(function () {
  var root = document.documentElement;
  var KEY = 'theme';

  function system() {
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function current() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  function label(t) { return t === 'dark' ? '切换到浅色模式' : '切换到深色模式'; }
  function syncThemeColor(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    // Only override the home page chrome colour to match the (sticky) top bar;
    // other pages keep their own curated theme-color (guide purple, bingo, etc.)
    var isHome = document.body && document.body.classList.contains('home-page');
    if (!isHome) {
      try {
        var p = String(window.location.pathname || '').toLowerCase();
        if (p === '/' || p === '/index.html' || p.endsWith('/index.html')) isHome = true;
        else isHome = /<body[^>]*\bhome-page\b/i.test(document.documentElement.outerHTML);
      } catch (e) {}
    }
    if (!isHome) return;
    meta.setAttribute('content', theme === 'dark' ? '#0f141a' : '#f7f9fb');
  }
  function setGuideLinkPalette() {
    var path = String(window.location.pathname || '').toLowerCase();
    root.classList.remove('guide-links-green', 'guide-links-purple');

    if (/(?:asexual|greysexual|graysexual|demisexual)/.test(path)) {
      root.classList.add('guide-links-green');
    } else if (/aromantic/.test(path)) {
      root.classList.add('guide-links-purple');
    }
  }

  function installFloatingLayout() {
    if (!document.head) return;
    var existing = document.getElementById('prismFloatingLayout');
    if (existing) {
      // Move the override to the end after page-specific styles have loaded.
      document.head.appendChild(existing);
      return;
    }
    var style = document.createElement('style');
    style.id = 'prismFloatingLayout';
    style.textContent = [
      ':root { --prism-corner-inset: 18px; --prism-corner-control-size: 44px; }',
      'body:not(.scale-page) :is(.theme-toggle, .prism-back-home, .toc-toggle-btn, .guide-ai-launcher) { width: var(--prism-corner-control-size) !important; min-width: var(--prism-corner-control-size) !important; max-width: var(--prism-corner-control-size) !important; height: var(--prism-corner-control-size) !important; min-height: var(--prism-corner-control-size) !important; max-height: var(--prism-corner-control-size) !important; }',
      'body:not(.scale-page) .theme-toggle { position: fixed !important; top: calc(var(--prism-corner-inset) + env(safe-area-inset-top, 0px)) !important; right: calc(var(--prism-corner-inset) + env(safe-area-inset-right, 0px)) !important; bottom: auto !important; left: auto !important; }',
      'body:not(.scale-page) .guide-ai-launcher { position: fixed !important; top: calc(var(--prism-corner-inset) + env(safe-area-inset-top, 0px)) !important; left: calc(var(--prism-corner-inset) + env(safe-area-inset-left, 0px)) !important; right: auto !important; bottom: auto !important; }',
      'body:not(.scale-page) .floating-toc { position: fixed !important; right: calc(var(--prism-corner-inset) + env(safe-area-inset-right, 0px)) !important; bottom: calc(var(--prism-corner-inset) + env(safe-area-inset-bottom, 0px)) !important; top: auto !important; left: auto !important; }',
      '@media (max-width: 620px) { :root { --prism-corner-inset: 12px; } }'
    ].join('\n');
    document.head.appendChild(style);
  }

  // 1) Apply page-specific link palette and theme as early as possible.
  setGuideLinkPalette();
  installFloatingLayout();
  var initialTheme = stored() || system();
  root.setAttribute('data-theme', initialTheme);
  try { syncThemeColor(initialTheme); } catch (e) {}

  var SUN = '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>';
  var MOON = '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 9 0 0 0 21 12.79z"></path></svg>';

  function apply(theme, persist) {
    root.setAttribute('data-theme', theme);
    syncThemeColor(theme);
    var b = document.getElementById('themeToggle');
    if (b) b.setAttribute('aria-label', label(theme));
    if (persist) { try { localStorage.setItem(KEY, theme); } catch (e) { } }
  }

  function build() {
    if (!document.body) return;
    installFloatingLayout();
    try { syncThemeColor(current()); } catch (e) {}
    if (document.getElementById('themeToggle')) return;
    var btn = document.createElement('button');
    btn.id = 'themeToggle';
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', label(current()));
    btn.innerHTML = SUN + MOON;
    btn.addEventListener('click', function () {
      apply(current() === 'dark' ? 'light' : 'dark', true);
      btn.classList.add('is-hover-suppressed');
    });
    btn.addEventListener('pointerenter', function () {
      btn.classList.remove('is-hover-suppressed');
    });
    btn.addEventListener('pointerleave', function () {
      btn.classList.remove('is-hover-suppressed');
    });
    if (document.body.classList.contains('home-page')) {
      // Keep the home-page control independent from the horizontally scrolling
      // category bar; the shared floating layout owns the viewport offsets.
      btn.style.setProperty('position', 'fixed', 'important');
      btn.style.setProperty('left', 'auto', 'important');
      btn.style.setProperty('bottom', 'auto', 'important');
      btn.style.setProperty('z-index', '1000', 'important');
    }
    var scaleToolbar = document.querySelector('.global-progress');
    if (scaleToolbar) {
      scaleToolbar.classList.add('scale-mobile-toolbar');
      scaleToolbar.appendChild(btn);
    } else {
      document.body.appendChild(btn);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();

  // 2) Follow the OS live only while the user has not made a manual choice.
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) { if (!stored()) apply(e.matches ? 'dark' : 'light', false); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }
})();

/* Keep dynamically rendered Chinese copy consistent with the site's spacing
 * rule without touching code, URLs, or user-entered text. */
(function () {
  function normalizeSpacing(value) {
    return String(value || '')
      .replace(/([\p{Script=Han}])(?=[A-Za-z0-9])/gu, '$1 ')
      .replace(/([A-Za-z0-9][A-Za-z0-9+%#_]*)(?=\p{Script=Han})/gu, '$1 ');
  }

  function isBlocked(node) {
    var parent = node && node.parentElement;
    return !parent || !!parent.closest('script,style,pre,code,textarea');
  }

  function normalizeTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE || isBlocked(node)) return;
    var next = normalizeSpacing(node.nodeValue);
    if (next !== node.nodeValue) node.nodeValue = next;
  }

  function normalizeAttributes(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return;
    if (element.closest('script,style,pre,code,textarea')) return;
    ['alt', 'aria-label', 'data-label', 'data-alt', 'placeholder', 'title'].forEach(function (name) {
      if (!element.hasAttribute(name)) return;
      var value = element.getAttribute(name);
      var next = normalizeSpacing(value);
      if (next !== value) element.setAttribute(name, next);
    });
  }

  function normalizeTextBoundaries(textNodes) {
    for (var i = 1; i < textNodes.length; i += 1) {
      var previous = textNodes[i - 1];
      var current = textNodes[i];
      if (isBlocked(previous) || isBlocked(current)) continue;
      var previousValue = previous.nodeValue || '';
      var currentValue = current.nodeValue || '';
      if (/[A-Za-z0-9+%#_]$/.test(previousValue) && /^[\p{Script=Han}]/u.test(currentValue)) {
        previous.nodeValue = previousValue + ' ';
      }
      if (/[\p{Script=Han}]$/u.test(previousValue) && /^[A-Za-z0-9]/.test(currentValue)) {
        current.nodeValue = ' ' + currentValue;
      }
    }
  }

  function normalizeSubtree(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      normalizeTextNode(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE || root.closest('script,style,pre,code,textarea')) return;
    normalizeAttributes(root);
    var textWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var textNodes = [];
    var textNode;
    while ((textNode = textWalker.nextNode())) {
      textNodes.push(textNode);
      normalizeTextNode(textNode);
    }
    normalizeTextBoundaries(textNodes);
    var elementWalker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    var element;
    while ((element = elementWalker.nextNode())) normalizeAttributes(element);
  }

  function install() {
    if (!document.body) return;
    normalizeSubtree(document.body);
    if (!window.MutationObserver) return;
    var observer = new MutationObserver(function (records) {
      records.forEach(function (record) {
        if (record.type === 'characterData') normalizeTextNode(record.target);
        if (record.type === 'attributes') normalizeAttributes(record.target);
        if (record.type === 'childList') normalizeSubtree(record.target);
      });
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['alt', 'aria-label', 'data-label', 'data-alt', 'placeholder', 'title']
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install, { once: true });
  else install();
})();

/* Shared, opt-in support prompt used at the point where a reader has finished
 * a guide or tool. The QR dialog is only opened after an explicit click. */
(function () {
  var themeScript = document.currentScript;
  var supportImage = themeScript && themeScript.src
    ? new URL('appreciation-code.webp', themeScript.src).href
    : 'assets/appreciation-code.webp';
  var CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>';
  var lastTrigger = null;

  function closeSupport(dialog) {
    if (!dialog) return;
    if (typeof dialog.close === 'function') dialog.close();
    else {
      dialog.removeAttribute('open');
      if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
      lastTrigger = null;
    }
  }

  function createDialog() {
    var existing = document.getElementById('prismSupportDialog');
    if (existing) return existing;

    var dialog = document.createElement('dialog');
    dialog.id = 'prismSupportDialog';
    dialog.className = 'prism-support-dialog';
    dialog.setAttribute('aria-labelledby', 'prismSupportDialogTitle');
    dialog.innerHTML = [
      '<div class="prism-support-dialog-inner">',
      '  <div class="prism-support-dialog-header">',
      '    <div>',
      '      <h2 id="prismSupportDialogTitle">支持 PrismSelf</h2>',
      '      <p>PrismSelf 免费开放，由个人维护。你的支持将用于分担域名、服务与持续维护成本。</p>',
      '    </div>',
      '    <button class="prism-support-close" type="button" aria-label="关闭支持项目弹窗">' + CLOSE + '</button>',
      '  </div>',
      '  <a class="prism-support-code" href="' + supportImage + '" target="_blank" rel="noopener noreferrer" aria-label="打开微信赞赏码大图">',
      '    <img src="' + supportImage + '" alt="PrismSelf 微信赞赏码" loading="lazy" decoding="async">',
      '  </a>',
      '  <p class="prism-support-instruction">电脑访问时可使用微信扫码；手机访问时可打开大图后保存，再从微信扫一扫中选择相册识别。</p>',
      '  <p class="prism-support-note">自愿支持，无任何内容或功能以赞赏为前提。</p>',
      '</div>'
    ].join('');

    document.body.appendChild(dialog);
    dialog.querySelector('.prism-support-close').addEventListener('click', function () {
      closeSupport(dialog);
    });
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) closeSupport(dialog);
    });
    dialog.addEventListener('close', function () {
      if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
      lastTrigger = null;
    });
    return dialog;
  }

  function openSupport(trigger) {
    var dialog = createDialog();
    lastTrigger = trigger || document.activeElement;
    if (dialog.open) return;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  }

  function createCTA() {
    var section = document.createElement('aside');
    section.className = 'prism-support-cta';
    section.setAttribute('aria-label', '支持 PrismSelf');
    section.innerHTML = [
      '<span class="prism-support-heart" aria-hidden="true">♡</span>',
      '<div class="prism-support-content">',
      '  <strong>支持 PrismSelf</strong>',
      '  <p>PrismSelf 免费开放，由个人持续维护。如果这里对你有帮助，可以自愿支持项目。</p>',
      '</div>',
      '<button class="prism-support-button" type="button" data-prism-support-open>支持项目</button>'
    ].join('');
    return section;
  }

  function hasDirectCTA(target) {
    return Array.prototype.some.call(target.children || [], function (child) {
      return child.classList && child.classList.contains('prism-support-cta');
    });
  }

  function mount(target) {
    if (!target || hasDirectCTA(target)) return null;
    var cta = createCTA();
    target.appendChild(cta);
    return cta;
  }

  function mountAfter(target) {
    if (!target) return null;
    var next = target.nextElementSibling;
    if (next && next.classList.contains('prism-support-cta')) return next;
    var cta = createCTA();
    target.insertAdjacentElement('afterend', cta);
    return cta;
  }

  function autoMountSupport() {
    var path = String(window.location.pathname || '').toLowerCase();
    var support = null;
    if (path.indexOf('/guides/') !== -1) {
      support = mount(document.querySelector('#write .main-content, body > .main-content, .main-content'));
      if (support) support.classList.add('prism-support-cta--guide');
    } else if (path.indexOf('/analyses/') !== -1) {
      support = mount(document.querySelector('.container'));
    } else if (path.indexOf('/bingos/') !== -1) {
      support = mount(document.querySelector('.page'));
    } else if (path.indexOf('/glossaries/') !== -1) {
      support = mount(document.querySelector('main'));
    } else if (path.indexOf('/topics/') !== -1) {
      support = mount(document.querySelector('#write'));
    }
    if (support && path.indexOf('/guides/') === -1) {
      support.classList.add('prism-support-cta--embedded');
    }

    var toolSupport = mountAfter(document.querySelector('#summary.summary-card'));
    if (toolSupport) toolSupport.classList.add('prism-support-cta--embedded');
  }

  window.PrismSupport = {
    open: openSupport,
    createCTA: createCTA,
    mount: mount,
    mountAfter: mountAfter
  };

  document.addEventListener('click', function (event) {
    var trigger = event.target && event.target.closest
      ? event.target.closest('[data-prism-support-open]')
      : null;
    if (trigger) openSupport(trigger);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(autoMountSupport, 0);
    }, { once: true });
  } else {
    setTimeout(autoMountSupport, 0);
  }
  window.addEventListener('load', autoMountSupport, { once: true });
})();
