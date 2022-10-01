import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import image from '@astrojs/image';

export default defineConfig({
	site: 'https://sw-site-3goatridea-rj.a.run.app/',
	base: '/',
	output: 'static',
	server: { port: 3000, host: true },
	integrations: [
		react(),
		mdx(),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		sitemap(),
		image(),
	],
});