import { defineStore } from "pinia";

export const useLangStore = defineStore("lang", {
  state: () => {
    const autoLang = navigator.language.split("-")[0] || "en";
    const stored = localStorage.getItem("lang") || autoLang;

    return {
      autoLang,
      lang: stored,
    };
  },

  actions: {
    setLang(newLang: string) {
      this.lang = newLang;
      localStorage.setItem("lang", newLang);
    },

    resetLang() {
      this.lang = this.autoLang;
      localStorage.setItem("lang", this.autoLang);
    },
  },
});
