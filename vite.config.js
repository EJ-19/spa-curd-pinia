import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Ajusta base con el nombre de tu repo para GitHub Pages: base: '/nombre-repo/'
  base: './' 
})