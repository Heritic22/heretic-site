import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',   // 👈 THIS is what Cloudflare needs
  vite: {
    plugins: [tailwind()],
  },
});