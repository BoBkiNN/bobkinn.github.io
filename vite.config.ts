import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'child_process'

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
