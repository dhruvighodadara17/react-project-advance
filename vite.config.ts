import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Correct way to simulate `__dirname` in ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  test: {
    // ✅ Now 'test' property will be recognized
    environment: 'jsdom', // For React components
    globals: true, // Enable global test methods like `describe` and `it`
    include: ['**/*.{test,spec}.{ts,tsx}'], // Test file pattern
  },

  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
})
