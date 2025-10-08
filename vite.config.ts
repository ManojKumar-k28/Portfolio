import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // --- ADD THIS SECTION ---
  server: {
    // This makes the server accessible on your local network
    host: true, 
    // You can specify a port, or Vite will use its default (5173)
    port: 3000, 
    // Automatically open the app in your browser when the server starts
    open: true, 
  },
  // -------------------------

  optimizeDeps: {
    // This exclude is usually not necessary for lucide-react, 
    // but I'm keeping it as it was in your original config.
    // You can likely remove it if you don't have a specific reason for it.
    exclude: ['lucide-react'], 
  },
});