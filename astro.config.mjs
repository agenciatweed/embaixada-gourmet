import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://embaixada-gourmet.vercel.app',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
