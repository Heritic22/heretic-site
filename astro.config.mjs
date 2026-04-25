import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',   // 👈 IMPORTANT
  vite: {
    plugins: [tailwind()],
  },
});