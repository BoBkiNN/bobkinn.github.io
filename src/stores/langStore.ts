import { defineStore } from "pinia";

export const useLangStore = defineStore("lang", {
  state: () => ({
    lang: navigator.language.split("-")[0] || "en",
  }),
  actions: {
    setLang(newLang: string) {
      this.lang = newLang;
    },
  },
});
