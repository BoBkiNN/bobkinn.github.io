import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'child_process'
import { buildI18n, LANG_DIR } from "./scripts/build-i18n";

const commitHash = execSync('git rev-parse HEAD').toString().trim()

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    {
      name: 'vite-git-hash',
      configureServer(server) {
        server.middlewares.use('/__git_hash', (_req, res) => {
          const hash = execSync('git rev-parse HEAD').toString().trim()
          res.end(hash)
        })
      },
    },
    {
      name: "vite-plugin-i18n-compiler",
      buildStart() {
        buildI18n();
      },
      configureServer(server) {
        const watcher = server.watcher;
        watcher.add(LANG_DIR);

        watcher.on("change", (file) => {
          if (file.startsWith(LANG_DIR)) {
            buildI18n();
            server.ws.send({ type: "full-reload" });
          }
        });
      },
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  define: {
    __GIT_HASH__: JSON.stringify(commitHash)
  }
})
