import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginVercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePluginVercel({
            serverEntry: './server.js', // Specify your server entry file
        }),
    ],
});
