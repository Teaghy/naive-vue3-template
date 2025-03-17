import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state() {
    return {
      loading: false,
    };
  },
  actions: {
    updateLoading(payload) {
      this.loading = payload;
    },
  },
});

export default useAppStore;
