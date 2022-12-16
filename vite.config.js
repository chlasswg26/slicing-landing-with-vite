import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    injectRegister: 'auto',
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{css,html,ico,png,svg}'],
      sourcemap: true
    },
    manifest: {
      name: 'My Landing Page',
      short_name: 'My Landing Page',
      display: 'standalone',
      background_color: '#dc143c',
      lang: 'en',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      theme_color: '#dc143c',
    },
    devOptions: {
      enabled: true
    },
    mode: import.meta.env?.MODE || 'development'
  })],
})
