import { defineConfig } from 'vite'

export default defineConfig({
  cacheDir: '.vite-cache',
  esbuild: {
    jsx: 'automatic',
  },
  build: {
    target: 'es2020',
    sourcemap: false,
  },
})
