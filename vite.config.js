import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Charles-K-Construction/', // <-- THIS IS THE FIX
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
  }
});
