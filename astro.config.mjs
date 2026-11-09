import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are set by the GitHub Pages workflow for the preview
// (https://<user>.github.io/<repo>/). Locally and on the real domain they're unset.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.uptownbarbershop.lt',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
