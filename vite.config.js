import { defineConfig } from 'vite'

const backendUrl = 'http://127.0.0.1'

export default defineConfig(() => ({
  build: {
    outDir: '../main/resources/public'
  },
  root: 'src/web',
  server: {
    port: 3000,
    proxy: {
      '/api': backendUrl,
      '/images': backendUrl
    }
  }
}))
