import { defineConfig } from 'vite'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: 'https://maplibre-assets.geojar.com/',

  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/style.json',
          //dest: 'assets/'
          dest: ''
        }
      ]
    })
  ],

  build: {
    rollupOptions: {
      input: {
        map: resolve(__dirname, 'src/map.html')
      },
      output: {
        //entryFileNames: 'assets/map.js',
        //chunkFileNames: 'assets/[name].js',
        //assetFileNames: 'assets/map[extname]',
        entryFileNames: 'map.js',
        chunkFileNames: '[name].js',
        assetFileNames: 'map[extname]',
        manualChunks: undefined
      }
    },
    outDir: 'public',
    emptyOutDir: true,
    minify: 'esbuild'
  }
})
