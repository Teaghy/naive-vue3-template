<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <slot />
          <NaiveProviderContent />
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script setup>
import { useLoadingBar, useMessage } from "naive-ui";
import { defineComponent, h } from "vue";

function setupNaiveTools() {
  window.$loadingBar = useLoadingBar();
}

const NaiveProviderContent = defineComponent({
  setup() {
    setupNaiveTools();
    window.$message = useMessage();
  },
  render() {
    return h("div");
  },
});
</script>
