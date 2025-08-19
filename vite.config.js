import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html',
      external: [
        '/reveal.js/dist/reveal.esm.js',
        '/reveal.js/plugin/markdown/markdown.esm.js',
        '/reveal.js/plugin/notes/notes.esm.js',
        '/reveal.js/plugin/highlight/highlight.esm.js',
        '/reveal.js/plugin/search/search.esm.js',
        '/reveal.js/plugin/zoom/zoom.esm.js'
      ]
    }
  },
  optimizeDeps: {
    include: ['reveal.js']
  },
  publicDir: 'public',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/reveal.js/dist/*',
          dest: 'reveal.js/dist'
        },
        {
          src: 'node_modules/reveal.js/plugin/*',
          dest: 'reveal.js/plugin'
        }
      ]
    })
  ]
})
