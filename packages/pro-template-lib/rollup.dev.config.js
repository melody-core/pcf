import * as fs from 'fs';
import * as path from 'path';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const entries = {};

const COM_ROOT_PATH = path.resolve(__dirname, './src/components')

const dirs = fs.readdirSync(COM_ROOT_PATH);

dirs.forEach(dir => {
  if(dir.includes('index')){
    entries['index'] = `${COM_ROOT_PATH}/${dir}`;
  }else{
    entries[`components/${dir}/index`] = `${COM_ROOT_PATH}/${dir}/index.tsx`
  }
})

export default {
  input: entries,
  output: [{
    entryFileNames: '[name].es.js',
    format: "esm",
    dir: 'dist',
    sourceMap: true,
    plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
  }, {
    entryFileNames: '[name].js',
    format: "cjs",
    dir: 'dist',
    sourceMap: true,
  }],
  plugins: [
    typescript(),
    babel({ presets: ['@babel/preset-react'] }),
    terser(),
    postcss({
      plugins: [autoprefixer()],
      use: {
        sass: null,
        stylus: null,
        less: { javascriptEnabled: true }
      }, 
      modules: true,
      sourceMap: true,
      extract: true,
      minimize: true,
    })
  ]
};