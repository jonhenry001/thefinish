import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: 'https://the-finish-automotive.featherydisc4.chatgpt.site',
  output: 'static',
  vite: { plugins: [tailwindcss()] }
});
