import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio/", // <-- ADD THIS LINE FOR GITHUB PAGES
  plugins: [react()],
  
  // The server config is for local development and does not affect the build
  server: {
    host: true, 
    port: 3001, 
  },

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});