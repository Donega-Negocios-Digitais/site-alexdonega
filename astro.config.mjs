import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

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
  integrations: [tailwind()],

  // Vite config
  vite: {
    ssr: {
      external: ['node-fetch']
    }
  }
});