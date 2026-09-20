import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  // NOTE: If deploying to a repo that is NOT named "HasanMoham.github.io",
  // change base to '/your-repo-name/' to match the GitHub Pages URL
})
