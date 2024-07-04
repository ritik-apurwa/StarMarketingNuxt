import { defineStore } from 'pinia';


export const useDataStore = defineStore('data', () => {
  const loader = ref(true);
  onMounted(() => {
    setTimeout(() => (loader.value = false), 5000);
  });
  return {loader };
});
