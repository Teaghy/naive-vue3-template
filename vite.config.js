import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";

const baseSrc = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  base: "/naive-vue3-template/",
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ["vue", "@vueuse/core"],
    }),
    tailwindcss(),
    Components({
      resolvers: [
        // AntDesignVueResolver({
        //   importStyle: false, // css in js
        // }),
        NaiveUiResolver(),
      ],
    }),
    Icons({
      /* options */
    }),
    VueDevTools(),
  ],
  resolve: {
    alias: [
      {
        find: "~@",
        replacement: baseSrc,
      },
      {
        find: "~",
        replacement: baseSrc,
      },
      {
        find: "@",
        replacement: baseSrc,
      },
      {
        find: "~#",
        replacement: resolve(baseSrc, "./enums"),
      },
    ],
  },
});
