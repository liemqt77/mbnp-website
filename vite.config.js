import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  cacheDir: '.vite-cache',
  esbuild: {
    jsx: 'automatic',
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        about: resolve(process.cwd(), 'about.html'),
        expertise: resolve(process.cwd(), 'expertise.html'),
        collaborations: resolve(process.cwd(), 'collaborations.html'),
        people: resolve(process.cwd(), 'people.html'),
        profile: resolve(process.cwd(), 'profile.html'),
        insights: resolve(process.cwd(), 'insights.html'),
        contact: resolve(process.cwd(), 'contact.html'),
      },
    },
  },
})
