// astro.config.mjs

import { defineConfig } from 'astro/config';
import path from 'path';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://block.i-kinako.com',
  integrations: [react(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@/components': path.resolve('./src/components'),
        '@/layouts': path.resolve('./src/layouts'),
        '@/lib': path.resolve('./src/lib'),
        '@/styles': path.resolve('./src/styles'),
        '@/types': path.resolve('./src/types'),
      },
    },
  },
  output: 'static',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
});
