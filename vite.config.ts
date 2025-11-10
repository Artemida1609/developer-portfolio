import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import os from 'os'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	// Important for GitHub Pages at https://<user>.github.io/developer-portfolio/
	// Ensures built asset URLs include the repo name to avoid 404s
	base: '/developer-portfolio/',
	plugins: [react()],
	// Move Vite cache outside Dropbox to avoid EBUSY/locked file errors on Windows
	cacheDir: path.join(os.tmpdir(), 'vite-cache-developer-portfolio'),
	server: {
		watch: {
			// More resilient on network/Cloud sync fs like Dropbox
			usePolling: true,
			interval: 300,
		},
	},
})


