import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://lordfitoi.github.io',
	base: 'https://github.com/lordfitoi/lordfitoi.github.io',
	integrations: [mdx(), sitemap()],
});
