import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  // GitHub Pages (repositório): https://dev-marcosbrito.github.io/site.junior/
  base: process.env.GITHUB_ACTIONS ? '/site.junior/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

