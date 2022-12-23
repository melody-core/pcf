/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-08-29 20:39:02
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-23 23:51:16
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/vite.tem.config.ts
 * @Description: update here
 */
import { defineConfig } from 'vite';
import * as fs from 'fs';
import * as path from 'path';
import react from '@vitejs/plugin-react';

const entries = {};

const COM_ROOT_PATH = path.resolve(__dirname, './src/components');

const dirs = fs.readdirSync(COM_ROOT_PATH);

dirs.forEach((dir) => {
  if (dir.includes('index')) {
    entries['index'] = `${COM_ROOT_PATH}/${dir}`;
  } else {
    entries[`lib/${dir}`] = `${COM_ROOT_PATH}/${dir}/index.tsx`;
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/components'),
      name: 'MelodyTemCore',
      // formats: ['es', 'umd'],
      // fileName: (format) => `[name].${format}.js`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'antd',
        '@ant-design/icons',
        '@ant-design/pro-components',
      ],
      input: entries,
      output: [
        {
          entryFileNames: '[name].es.js',
          format: 'esm',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
        {
          entryFileNames: '[name].js',
          format: 'umd',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      ],
    },
  },
});
