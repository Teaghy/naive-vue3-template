import { createApp } from "vue";
import App from "./App.vue";
import { router, setupRouter } from "./router";
import { setupStore } from "./store";

import "@unocss/reset/normalize.css";
import "virtual:uno.css";
import "./styles/index.less";

async function bootstrap() {
  const app = createApp(App);
  // 初始化路由
  setupRouter(app);
  // 初始化pinia
  setupStore(app);
  await router.isReady();
  // app.use(i18n);
  app.mount("#app");
}

bootstrap();
