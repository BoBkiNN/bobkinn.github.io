import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useLangStore } from "@/stores/langStore";
import i18nData from "@/generated/i18n.json";

// Types for generated data
interface I18nData {
  data: Record<string, Record<string, string>>;
  large: Record<string, Record<string, string>>;
  languages: string[];
}

type Lang = "ru" | "en" | string;

/**
 * I18n system for handling localized strings and large text.
 */
class I18n {
  private data: I18nData;

  constructor(data: I18nData) {
    this.data = data;
  }

  private get store() {
    return useLangStore()
  }

  public get languages() {
    return this.data.languages
  }

  get(key: string, ...args: (string | number)[]): string;
  get(key: string, lang: Lang, ...args: (string | number)[]): string;
  get(key: string, langOrArg: Lang | string | number, ...args: (string | number)[]): string {
    const lang = typeof langOrArg === "string" || typeof langOrArg === "number"
      ? this.store.lang as Lang
      : langOrArg;

    const keyArgs = typeof langOrArg === "string" || typeof langOrArg === "number"
      ? [langOrArg, ...args]
      : args;

    return this.resolveString(this.data.data, key, lang, ...keyArgs);
  }

  getExact(key: string, lang: Lang, ...args: (string | number)[]) : string {
    return this.resolveString(this.data.data, key, lang, ...args);
  }

  getLarge(folder: string, ...args: (string | number)[]): string;
  getLarge(folder: string, lang: Lang, ...args: (string | number)[]): string;
  getLarge(folder: string, langOrArg: Lang | string | number, ...args: (string | number)[]): string {
    const lang = typeof langOrArg === "string" || typeof langOrArg === "number"
      ? this.store.lang as Lang
      : langOrArg;

    const folderArgs = typeof langOrArg === "string" || typeof langOrArg === "number"
      ? [langOrArg, ...args]
      : args;

    return this.resolveString(this.data.large, folder, lang, ...folderArgs).replace("\\n", "<br>");
  }

  /** Reactive version — recomputes when language changes. */
  use(key: string, ...args: (string | number)[]) {
    const { lang } = storeToRefs(this.store);
    return computed(() => this.get(key, lang.value, ...args));
  }

  /** Reactive large version. */
  useLarge(folder: string, ...args: (string | number)[]) {
    const { lang } = storeToRefs(this.store);
    return computed(() => this.getLarge(folder, lang.value, ...args));
  }

  usePrefixed(key: string, ...args: (string | number)[]) {
    if (key.startsWith("$$")) return key
    if (key.startsWith("$")) return this.use(key.substring(1), ...args)
    else return ref(key)
  }


  private resolveString(
    table: Record<string, Record<string, string>>,
    key: string,
    lang: Lang,
    ...args: (string | number)[]
  ): string {
    const langsToTry = [lang, "ru", "en"];

    for (const l of langsToTry) {
      const text = table[key]?.[l];
      if (text) {
        return this.format(text, args);
      }
    }

    return `[${key}]`; // fallback if not found anywhere
  }

  /** Simple string formatter: replaces {0}, {1}, etc. */
  private format(text: string, args: (string | number)[]): string {
    return text.replace(/\{(\d+)\}/g, (_, i) => String(args[i] ?? ""));
  }
}

// Singleton instance
export const i18n = new I18n(i18nData as I18nData);
