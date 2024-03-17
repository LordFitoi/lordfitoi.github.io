import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
const site = 'https://lordfitoi.github.io';
const base = import.meta.env.MODE != "development" ? 'https://lordfitoi.github.io': "";

export default defineConfig({
  site: site,
  base: base,
  integrations: [mdx(), sitemap(), tailwind()]
});