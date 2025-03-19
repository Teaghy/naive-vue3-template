import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import VueDevTools from 'vite-plugin-vue-devtools';

const baseSrc = fileURLToPath(new URL('./src', import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    eslintPlugin(),
    vue(),
    AutoImport({
      eslintrc: {
        enabled: true, // <-- this
        filepath: './.eslintrc-auto-import.json',
      },
      // dts: resolve(baseSrc, './auto-imports.d.ts'),
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', '@vueuse/core'],
    }),
    UnoCSS(),
    Components({
      resolvers: [
        // AntDesignVueResolver({
        //   importStyle: false, // css in js
        // }),
        NaiveUiResolver(),
      ],
    }),
    Icons({ /* options */ }),
    VueDevTools(),
  ],
  resolve: {
    alias: [
      {
        find: '~@',
        replacement: baseSrc,
      },
      {
        find: '~',
        replacement: baseSrc,
      },
      {
        find: '@',
        replacement: baseSrc,
      },
      {
        find: '~#',
        replacement: resolve(baseSrc, './enums'),
      },
    ],
  },
});
