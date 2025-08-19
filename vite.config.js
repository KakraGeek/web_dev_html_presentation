import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html'
    }
  },
  optimizeDeps: {
    include: [
      'reveal.js',
      'reveal.js/plugin/markdown/markdown.esm.js',
      'reveal.js/plugin/notes/notes.esm.js',
      'reveal.js/plugin/highlight/highlight.esm.js',
      'reveal.js/plugin/search/search.esm.js',
      'reveal.js/plugin/zoom/zoom.esm.js'
    ]
  },
  publicDir: 'public',
  css: {
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  }
})
