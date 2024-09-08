/// <reference types="vite/client" />
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

console.log('VITE_API_URL:', process.env.VITE_API_URL)

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://78.24.180.33:7111/',
				changeOrigin: true,
			},
		},
	},
})
