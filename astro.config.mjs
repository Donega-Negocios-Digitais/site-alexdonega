import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  // Configurações gerais
  site: 'https://alexdonega.com.br/',
  base: '/',

  // Configurações de build
  build: {
    format: 'directory',
    assets: '_astro',
  },

  // Configurações de servidor
  server: {
    port: 4000,
    host: true,
  },

  // Integrations
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],

  // Vite config
  vite: {
    ssr: {
      external: ['node-fetch']
    }
  }
});
