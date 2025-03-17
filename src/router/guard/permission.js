export function setupRouterGuard(router) {
  const hasPermission = true;

  router.beforeEach(() => {
    if (hasPermission) {
      return true;
    }
    return {
      name: 'Login',
    };
  });
}
