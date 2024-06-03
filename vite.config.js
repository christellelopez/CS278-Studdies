import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // If your index.html is in the public directory
  build: {
    outDir: '../dist', // Adjust as needed
  },
  resolve: {
    alias: {
      '@': '/modules', // Alias for source directory
    },
  },
});
