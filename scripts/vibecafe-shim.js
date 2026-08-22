/* PrismSelf vibecafe 脚本封装：
   - 本地环境（localhost / 127.0.0.1 / file://）：跳过加载，静默无报错
   - 线上环境：异步加载原始脚本，加载 / 发送失败时吞掉异常，避免污染控制台
*/
(function () {
    const host = location.hostname;
    const isLocal =
        host === 'localhost' ||
        host === '127.0.0.1' ||
        host === '' ||
        location.protocol === 'file:';

    const currentScript = document.currentScript || (function () {
        const list = document.getElementsByTagName('script');
        return list[list.length - 1];
    })();

    const productId = currentScript?.getAttribute('data-vc-product-id');
    const authKey = currentScript?.getAttribute('data-vc-auth-key');

    if (isLocal) return;
    if (!productId || !authKey) return;

    function swallow(e) {
        try { e.preventDefault?.(); } catch (_) { }
        try { e.stopImmediatePropagation?.(); } catch (_) { }
        return true;
    }

    const s = document.createElement('script');
    s.defer = true;
    s.setAttribute('data-vc-product-id', productId);
    s.setAttribute('data-vc-auth-key', authKey);
    s.onerror = function () { /* 静默加载失败 */ };
    window.addEventListener('error', swallow, true);
    window.addEventListener('unhandledrejection', swallow, true);

    s.onload = function () {
        setTimeout(function () {
            window.removeEventListener('error', swallow, true);
            window.removeEventListener('unhandledrejection', swallow, true);
        }, 3000);
    };

    s.src = 'https://vibecafe.ai/telemetry/v1.js';
    (document.head || document.documentElement).appendChild(s);
})();
