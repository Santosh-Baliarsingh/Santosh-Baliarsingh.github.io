import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Santosh-Baliarsingh.github.io/",
  plugins: [react()],
  build: {
    outDir: 'public', // output directory for build files
  },
})
