import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Charles-K-Construction/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
  }
});
