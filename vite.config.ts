import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.svg'],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@modules': '/src/modules',
      '@router': '/src/router',
      '@services': '/src/services',
      '@theme': '/src/theme',
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@hooks': '/src/hooks',
      '@interfaces': '/src/interfaces'
    },
  },
  css:{
    preprocessorOptions:{
      scss: {
        additionalData: `@import './src/theme/App';`,
      },
    }
  }
})

