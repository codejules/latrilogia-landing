// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: 'server',
  adapter: netlify(),
  vite: {
    envPrefix: ['VITE_'],
  }
});