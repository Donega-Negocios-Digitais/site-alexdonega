import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://alexdonega.com.br/',
  base: '/',

  build: {
    format: 'directory',
    assets: '_astro',
  },

  server: {
    port: 4000,
    host: true,
  },

  integrations: [
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['node-fetch']
    }
  }
});
