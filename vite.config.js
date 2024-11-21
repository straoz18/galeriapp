import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-ecommerce-coderhouse/',
  server: { host: true },
  plugins: [react()],
})
