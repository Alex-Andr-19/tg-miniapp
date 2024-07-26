import { fileURLToPath, URL } from 'node:url'

import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const base: UserConfig = {};
if (process.env.NODE_ENV !== "development") {
  // base.root = "/tg-miniapp/";
  base.base = "/tg-miniapp/";
  base.publicDir = "/tg-miniapp/";
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  ...base,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
