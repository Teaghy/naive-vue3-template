import { createPinia } from 'pinia';

export * from './modules';

const store = createPinia();

export function setupStore(app) {
  app.use(store);
}
