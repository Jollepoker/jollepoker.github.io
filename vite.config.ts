import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    optimizeDeps: {
        include: ['vue'],
    },
    build: {
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('/styling/')) {
                        const match = id.match(/\/styling\/([^/]+)/);
                        if (match) {
                            return `theme-${match[1]}`;
                        }
                    }
                }
            }
        }
    }
});
