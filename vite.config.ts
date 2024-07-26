import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

console.log(process.env.NODE_ENV);

const publicDir: { publicDir?: string } = {};
if (process.env.NODE_ENV !== "development") {
  publicDir.publicDir = "/tg-miniapp/";
}
console.log(publicDir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  ...publicDir,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
