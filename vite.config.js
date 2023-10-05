import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// Load environment variables based on the current mode (development or production)
const env = dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
}).parsed;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Make environment variables accessible in your Vite app code
    'import.meta.env': env,
  },
  server: {
    configureServer: ({ middlewares }) => {
      middlewares.use((req, res, next) => {
        // Check if the request has the host "example.com" and is for the root path ("/").
        if (req.url === '/' && req.headers.host === 'ushaadvancedengineering.me') {
          // Set the "X-Robots-Tag" header to "noindex".
          res.setHeader('X-Robots-Tag', 'noindex');
        }
        // Continue processing the request.
        next();
      });
    },
  },
})
