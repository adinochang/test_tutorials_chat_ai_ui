import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // add tailwindcss, and remember to add it plugins below

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
