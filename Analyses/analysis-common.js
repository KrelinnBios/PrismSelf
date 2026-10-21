/* PrismSelf 分析页共享脚本：
   - .controls 筛选栏：内容少时自动居中、内容多时变成可横向拖动的滚动条
   - 桌面端：鼠标按住拖动滚动容器（不拦截 click，点按钮照常触发）
   - 移动端：完全不拦截 touch，依赖浏览器原生 overflow-x 横滚手势
   - 参考文献：引用跳转时展开列表，并将焦点移至对应条目
   - 详情弹窗：补齐对话框语义，打开时聚焦并限制 Tab，关闭后还原焦点
   - 筛选按钮：同步 aria-pressed
*/
(function () {
    function enableDrag(el) {
        if (!el || el.dataset.dragReady === '1') return;
        el.dataset.dragReady = '1';

        let isDown = false;
        let startX = 0;
        let startScroll = 0;
        const THRESHOLD = 8;

        const onDown = (e) => {
            const onBtn = e.target.closest('.filter-btn, button, a, [role="button"]');
            if (onBtn) return;
            if (el.classList.contains('centered')) return;
            if (e.button !== undefined && e.button !== 0) return;
            isDown = true;
            startX = e.clientX;
            startScroll = el.scrollLeft;
            el.style.userSelect = 'none';
        };

        const onMove = (e) => {
            if (!isDown) return;
            const dx = e.clientX - startX;
            if (Math.abs(dx) > THRESHOLD) {
                e.preventDefault && e.preventDefault();
                el.scrollLeft = startScroll - dx;
            }
        };

        const onUp = () => {
            if (!isDown) return;
            isDown = false;
            el.style.userSelect = '';
        };

        el.addEventListener('mousedown', onDown);
        window.addEventListener('mousemove', onMove, { passive: false });
        window.addEventListener('mouseup', onUp);
        window.addEventListener('mouseleave', onUp);
    }

    function toggleCentered(el) {
        const overflow = el.scrollWidth - el.clientWidth > 2;
        el.classList.toggle('centered', !overflow);
    }

    function initControls() {
        const controls = document.querySelectorAll('.controls');
        controls.forEach((c) => {
            enableDrag(c);
            toggleCentered(c);
            c.querySelectorAll('button, a').forEach((btn) => {
                btn.style.touchAction = 'manipulation';
            });
        });
        window.addEventListener('resize', () => {
            controls.forEach(toggleCentered);
        });
    }

    function initReferences() {
        let activeReference = null;

        function clearReference() {
            if (!activeReference) return;
            activeReference.classList.remove('reference-highlight');
            if (document.activeElement === activeReference) activeReference.blur();
            activeReference = null;
        }

        function revealReference(hash) {
            clearReference();
            if (!/^#ref-\d+$/.test(hash)) return;
            const reference = document.getElementById(hash.slice(1));
            const list = reference && reference.closest('.references details');
            if (!list) return;
            list.open = true;
            reference.classList.add('reference-highlight');
            activeReference = reference;
            requestAnimationFrame(() => {
                if (activeReference !== reference) return;
                reference.tabIndex = -1;
                reference.focus({ preventScroll: true });
                reference.scrollIntoView({ block: 'start', behavior: 'instant' });
            });
        }

        document.addEventListener('click', (event) => {
            if (event.button !== 0) return;
            const target = event.target instanceof Element ? event.target : null;
            const link = target?.closest('a[href^="#ref-"]');
            if (link) {
                if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
                    clearReference();
                    return;
                }
                const modal = link.closest('.modal-bg.open');
                if (modal) modal.querySelector('.modal-close')?.click();
                revealReference(link.getAttribute('href'));
                return;
            }
            clearReference();
        });
        window.addEventListener('hashchange', () => revealReference(window.location.hash));
        revealReference(window.location.hash);
    }

    // 详情弹窗：各页只负责填充内容并切换 .open，这里统一补齐对话框语义与焦点管理
    function initModal() {
        const modal = document.getElementById('modal');
        const box = modal && modal.querySelector('.modal-box');
        if (!box) return;

        modal.setAttribute('role', 'presentation');
        box.setAttribute('role', 'dialog');
        box.setAttribute('aria-modal', 'true');
        box.tabIndex = -1;

        let returnFocus = null;
        const focusables = () => Array.from(box.querySelectorAll(
            'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ));

        const onOpen = () => {
            const active = document.activeElement;
            returnFocus = active && active !== document.body && !box.contains(active) ? active : null;
            const title = box.querySelector('.modal-title');
            if (title) {
                title.id = title.id || 'modalTitle';
                box.setAttribute('aria-labelledby', title.id);
            }
            box.scrollTop = 0;
            box.focus({ preventScroll: true });
        };

        const onClose = () => {
            const target = returnFocus;
            returnFocus = null;
            if (target && target.isConnected && (box.contains(document.activeElement) || document.activeElement === document.body)) {
                target.focus({ preventScroll: true });
            }
        };

        let wasOpen = modal.classList.contains('open');
        new MutationObserver(() => {
            const isOpen = modal.classList.contains('open');
            if (isOpen === wasOpen) return;
            wasOpen = isOpen;
            if (isOpen) onOpen();
            else onClose();
        }).observe(modal, { attributes: true, attributeFilter: ['class'] });

        // 打开时把 Tab 限制在弹窗内
        document.addEventListener('keydown', (event) => {
            if (event.key !== 'Tab' || !modal.classList.contains('open')) return;
            const items = focusables();
            if (!items.length) {
                event.preventDefault();
                box.focus();
                return;
            }
            const first = items[0];
            const last = items[items.length - 1];
            if (event.shiftKey && (document.activeElement === first || document.activeElement === box)) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });
    }

    // 筛选按钮：用 aria-pressed 同步当前选中项，供读屏软件识别
    function initFilterState() {
        const buttons = Array.from(document.querySelectorAll('.controls .filter-btn'));
        if (!buttons.length) return;
        const sync = () => buttons.forEach((btn) => {
            btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
        });
        sync();
        buttons.forEach((btn) => new MutationObserver(sync).observe(btn, { attributes: true, attributeFilter: ['class'] }));
    }

    function init() {
        initControls();
        initReferences();
        initModal();
        initFilterState();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
