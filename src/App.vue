<template>
  <NConfigProvider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
    wh-full
    overflow-hidden
  >
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>

<script setup>
import { AppProvider } from "@/components/Application";
import { dateZhCN, zhCN } from "naive-ui";

/**
 * js 文件下使用这个做类型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    primaryColor: "#2484fa",
    primaryColorHover: "#2484faba", // 悬停状态颜色
    primaryColorPressed: "#2484faba", // 按下状态颜色
  },
};
</script>

<style scoped lang="less">
#app {
  font-family:
    PingFang SC,
    -apple-system,
    BlinkMacSystemFont,
    Roboto,
    Helvetica Neue,
    Helvetica,
    Arial,
    Hiragino Sans GB,
    Source Han Sans,
    Noto Sans CJK Sc,
    Microsoft YaHei,
    Microsoft Jhenghei,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
