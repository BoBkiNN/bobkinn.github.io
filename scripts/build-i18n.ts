import fs from "fs";
import path from "path";

export const LANG_DIR = path.resolve("src/lang");
const OUT_DIR = path.resolve("src/generated");
const OUT_FILE = path.join(OUT_DIR, "i18n.json");

interface I18nOutput {
  data: Record<string, Record<string, string>>;
  large: Record<string, Record<string, string>>;
  languages: string[];
}

export function buildI18n(): void {
  const result: I18nOutput = { data: {}, large: {}, languages: [] };
  const foundLangs = new Set<string>();

  const entries = fs.readdirSync(LANG_DIR, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(LANG_DIR, entry.name);

    if (entry.isFile()) {
      // ---- Root JSON files: en.json, ru.json ----
      if (!entry.name.endsWith(".json")) continue;

      const lang = path.basename(entry.name, ".json");
      foundLangs.add(lang);

      const json = JSON.parse(fs.readFileSync(fullPath, "utf8")) as Record<string, string>;
      for (const [key, value] of Object.entries(json)) {
        result.data[key] ??= {};
        result.data[key][lang] = value;
      }
    } else if (entry.isDirectory()) {
      // ---- Folder: description/en.txt, etc. ----
      const folder = entry.name;
      const files = fs.readdirSync(fullPath);

      for (const file of files) {
        if (!file.endsWith(".txt")) continue;

        const lang = path.basename(file, ".txt");
        foundLangs.add(lang);

        const text = fs.readFileSync(path.join(fullPath, file), "utf8").trim();
        result.large[folder] ??= {};
        result.large[folder][lang] = text;
      }
    }
  }

  // Deduplicate and sort language IDs
  result.languages = Array.from(foundLangs).sort();

  // Ensure output directory exists
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Write pretty JSON
  fs.writeFileSync(OUT_FILE, JSON.stringify(result, null, 2), "utf8");

  console.log(
    `✅ Built i18n.json with ${Object.keys(result.data).length} data keys, ${Object.keys(result.large).length} large entries, ${result.languages.length} languages.`
  );
}

// ESM-compatible CLI entry
if (process.argv[1] && process.argv[1].endsWith("build-i18n.ts")) {
  buildI18n();
}
