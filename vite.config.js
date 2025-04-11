import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600, // (optional: for large bundle warning)
  },
  server: {
    historyApiFallback: true, // 👈 important for SPA fallback
  }
})
