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
})
