import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Add the port number to your server configuration
  server: {
    host: true, // Exposes the server to your network
    port: 3001, // <-- SET YOUR DESIRED PORT NUMBER HERE
  },

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
