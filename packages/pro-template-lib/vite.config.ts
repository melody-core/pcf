import { defineConfig } from 'vite';
import NpmImport from 'less-plugin-npm-import';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        plugins: [new NpmImport({ prefix: '~' })],
      },
    },
  },
});
