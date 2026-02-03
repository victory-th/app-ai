import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          // Proxy API requests to the backend to avoid CORS during development
          '/api': {
            target: 'http://72.62.243.85:3001',
            changeOrigin: true,
            secure: false
          }
        }
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        // Expose backend URL for code that may read process.env.BACKEND_API
        'process.env.BACKEND_API': JSON.stringify(env.VITE_API_URL || 'http://72.62.243.85:3001')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
