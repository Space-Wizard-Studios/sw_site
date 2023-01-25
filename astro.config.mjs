import { defineConfig } from 'astro/config';

import NetlifyCMS from 'astro-netlify-cms';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';

import { SITE } from './src/config.mjs';

export default defineConfig({
	site: SITE.origin,
	base: SITE.basePathname,
	output: 'static',

	integrations: [
		react(),
		mdx(),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		image(),

		// SEO | Analytics
		sitemap(),
		partytown({
			config: {
				forward: ['dataLayer.push']
			},
		}),
		NetlifyCMS({
			config: {
				// Use Netlify’s “Git Gateway” authentication and target our default branch
				backend: {
					name: 'git-gateway',
					branch: 'main',
				},
				// Configure where our media assets are stored & served from
				media_folder: 'public/images/projects',
				public_folder: '/images/projects',
				// Configure the content collections
				collections: [
					{
						name: 'projects',
						label: 'Project Posts',
						label_singular: 'Project Post',
						folder: 'src/data/projects',
						create: true,
						delete: true,
						fields: [
							{ name: 'title', widget: 'string', label: 'Title' },
							{ name: 'subtitle', widget: 'string', label: 'Subtitle' },
							{ name: 'description', widget: 'string', label: 'Description' },
							{
								name: 'category', widget: 'select', label: 'Category',
								default: 'Game',
								options: [
									{ label: 'Game', value: 'Game' },
									{ label: 'AR', value: 'AR' },
									{ label: 'Web', value: 'Web' },
								],
							},
							{
								name: 'date',
								widget: 'datetime',
								format: 'YYYY-MM',
								date_format: 'YYYY-MM',
								time_format: false,
								label: 'Date',
							},
							{ name: 'body', widget: 'markdown', label: 'Body' },
						],
					},
				],
			},
		}),
	],

	vite: {
		build: {
			target: 'es2020',
		},
	},
});
