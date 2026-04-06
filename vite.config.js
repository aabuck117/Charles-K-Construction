import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/YOUR-REPO-NAME/', // <-- THIS IS THE FIX
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
  }
});
