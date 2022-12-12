import { fileURLToPath } from 'url'
import { rm } from 'node:fs/promises'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    {
      name: "Cleaning assets folder",
      async buildStart() {
        await rm(resolve(__dirname, '../assets'), { recursive: true, force: true });
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    minify: false, //set true for a production compilation

    outDir: resolve(__dirname, '../'),
    emptyOutDir: false,

    rollupOptions: {
      input: {
        app: resolve(__dirname,'./options.html'),
        popup: resolve(__dirname, './popup.html')
      },
    },
  }
})
