// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import preact from '@astrojs/preact';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://restaurantelatrilogia.es/',
  integrations: [tailwind(), preact(), sitemap()],
  output: 'server',
  adapter: netlify(),
  vite: {
    envPrefix: ['VITE_'],
  }
});