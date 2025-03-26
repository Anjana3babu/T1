import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Allows access from any device
    port: 3000, // Ensure this matches your ngrok port
    strictPort: true, 
    allowedHosts: ['.ngrok-free.app'], // Allow all ngrok subdomains
  },

  plugins: [react()],
})
