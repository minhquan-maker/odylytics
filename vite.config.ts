import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/** Static hosts serve `404.html` (with a 404 status) for unknown paths; the app then renders its NotFound page. */
function notFoundPage(): Plugin {
  let outDir = 'dist'
  return {
    name: 'odylytics-404',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      await copyFile(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), notFoundPage()],
})
