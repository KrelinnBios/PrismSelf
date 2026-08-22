/* PrismSelf 分析页共享脚本：
   - .controls 筛选栏：内容少时自动居中、内容多时变成可横向拖动的滚动条
   - 桌面端：鼠标按住拖动滚动容器（不拦截 click，点按钮照常触发）
   - 移动端：完全不拦截 touch，依赖浏览器原生 overflow-x 横滚手势
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

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initControls);
    } else {
        initControls();
    }
})();
