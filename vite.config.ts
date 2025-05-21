import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';
import { compression } from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          floatPrecision: 2,
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    }),
    compression(),
    tsConfigPaths(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      registerType: 'autoUpdate',
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: 'ESPERO:HYLIGHT 2025',
        short_name: 'ESPERO:HYLIGHT',
        description: 'HYU-ERICA 2025 spring festival application',
        theme_color: '#17171B',
        background_color: '#17171B',
        start_url: '/',
        display: 'standalone',
        display_override: ['window-controls-overlay', 'standalone'],
        orientation: 'portrait',
        icons: [
          {
            src: 'icons/icon-48x48.webp',
            sizes: '48x48',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-72x72.webp',
            sizes: '72x72',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-96x96.webp',
            sizes: '96x96',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-128x128.webp',
            sizes: '128x128',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-144x144.webp',
            sizes: '144x144',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-152x152.webp',
            sizes: '152x152',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-192x192.webp',
            sizes: '192x192',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-256x256.webp',
            sizes: '256x256',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-384x384.webp',
            sizes: '384x384',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-512x512.webp',
            sizes: '512x512',
            type: 'image/webp',
          },
        ],
      },

      injectManifest: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      },

      devOptions: {
        enabled: false,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
});
