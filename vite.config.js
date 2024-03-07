import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/web-coanalyst-02/",
  plugins: [vue()],
  resolve: {
    alias: [
      
    ]
  },
})
