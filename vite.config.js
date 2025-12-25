import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tours: resolve(__dirname, 'tours.html'),
        services: resolve(__dirname, 'services.html'),
        'why-us': resolve(__dirname, 'why-us.html'),
        testimonials: resolve(__dirname, 'testimonials.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  },
  server: {
    open: true
  }
})