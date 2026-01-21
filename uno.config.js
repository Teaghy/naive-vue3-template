import { presetWind3 } from "@unocss/preset-wind3";
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    ["wh-full", "w-full h-full"],
    ["f-c-c", "flex justify-center items-center"],
    ["flex-col", "flex flex-col"],
    ["text-ellipsis", "truncate"],
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
