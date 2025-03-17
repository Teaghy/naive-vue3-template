import { useAppStore } from '@/store';

function createLoadingManager() {
  let count = 0;

  const startLoading = (config) => {
    const appStore = useAppStore();
    if (count === 0) {
      appStore.updateLoading(true, config);
    }
    count++;
  };

  const stopLoading = (config) => {
    const appStore = useAppStore();
    if (count > 0) {
      count--;
      if (count === 0) {
        appStore.updateLoading(false, config);
      }
    }
  };

  const updateLoading = (status, config = {}) => {
    if (status) {
      startLoading(config);
      return;
    }
    stopLoading(config);
  };

  const clearLoading = () => {
    const appStore = useAppStore();
    appStore.updateLoading(false);
    count = 0;
  };

  return {
    updateLoading,
    clearLoading,
  };
}

const { updateLoading, clearLoading } = createLoadingManager();

export { clearLoading, updateLoading };
