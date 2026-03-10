import { defineConfig } from 'vite'

export default defineConfig({
    // Set the base path to match your GitHub repository name
    base: '/promotional-site/',
    server: {
        proxy: {
            '/promotional-site/docs': {
                target: 'http://localhost:5174',
                changeOrigin: true
            }
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                vi: 'vi/index.html',
                en: 'en/index.html',
                'zh-TW': 'zh-TW/index.html'
            }
        }
    }
})
