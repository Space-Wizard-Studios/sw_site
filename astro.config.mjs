import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config.mjs';
import prefetch from "@astrojs/prefetch";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  output: 'static',
  integrations: [
    react(),
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }), sitemap(), partytown({
      config: {
        forward: ['dataLayer.push']
      }
    }), prefetch(), robotsTxt()],
  vite: {
    build: {
      target: 'es2022'
    },
    types: ["vite/client"],
  }
});