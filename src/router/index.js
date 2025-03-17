import { createRouter, createWebHistory } from 'vue-router';
import { setupRouterGuard } from './guard/permission';
import { setupLoadingBar } from './loadingBar';
import { basicRoutes } from './routes';

export const router = createRouter({
  routes: [...basicRoutes],
  history: createWebHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app) {
  setupLoadingBar(router);
  setupRouterGuard(router);
  app.use(router);
}
