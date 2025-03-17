/**
 * 配置路由加载状态条
 * @param {Router} router Vue Router 实例
 */
export function setupLoadingBar(router) {
  router.beforeEach(() => {
    window.$loadingBar?.start();
  });

  router.afterEach(() => {
    setTimeout(() => {
      window.$loadingBar?.finish();
    }, 200);
  });

  router.onError(() => {
    window.$loadingBar?.error();
  });
}
