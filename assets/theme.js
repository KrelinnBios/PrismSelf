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
    if (!document.head || document.getElementById('prismFloatingLayout')) return;
    var style = document.createElement('style');
    style.id = 'prismFloatingLayout';
    style.textContent = [
      ':root { --prism-corner-inset: 18px; --prism-corner-control-size: 44px; }',
      'body:not(.scale-page) :is(.theme-toggle, .prism-back-home, .toc-toggle-btn, .guide-ai-launcher) { width: var(--prism-corner-control-size) !important; min-width: var(--prism-corner-control-size) !important; max-width: var(--prism-corner-control-size) !important; height: var(--prism-corner-control-size) !important; min-height: var(--prism-corner-control-size) !important; max-height: var(--prism-corner-control-size) !important; }',
      'body:not(.scale-page) .theme-toggle { position: fixed !important; top: calc(var(--prism-corner-inset) + env(safe-area-inset-top, 0px)) !important; right: calc(var(--prism-corner-inset) + env(safe-area-inset-right, 0px)) !important; bottom: auto !important; left: auto !important; }',
      'body:not(.scale-page) .prism-back-home { position: fixed !important; top: calc(var(--prism-corner-inset) + env(safe-area-inset-top, 0px)) !important; left: calc(var(--prism-corner-inset) + env(safe-area-inset-left, 0px)) !important; right: auto !important; bottom: auto !important; }',
      'body:not(.scale-page) .guide-ai-launcher { position: fixed !important; left: calc(var(--prism-corner-inset) + env(safe-area-inset-left, 0px)) !important; bottom: calc(var(--prism-corner-inset) + env(safe-area-inset-bottom, 0px)) !important; top: auto !important; right: auto !important; }',
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
  var BACK = '<svg class="icon-back" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>';

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
    var back = document.querySelector('.prism-back-home');
    if (back) back.innerHTML = BACK;
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
      // category bar; the shared four-corner layout owns the viewport offsets.
      btn.style.setProperty('position', 'fixed', 'important');
      btn.style.setProperty('left', 'auto', 'important');
      btn.style.setProperty('bottom', 'auto', 'important');
      btn.style.setProperty('z-index', '1000', 'important');
    }
    var scaleToolbar = document.querySelector('.global-progress');
    if (scaleToolbar) {
      scaleToolbar.classList.add('scale-mobile-toolbar');
      if (back) scaleToolbar.appendChild(back);
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
