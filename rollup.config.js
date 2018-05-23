import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/umd/react-multi-labels.js',
    format: 'umd',
    name: 'ReactMultiLabels',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  external: ['react', 'prop-types'],
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    babel({
      presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
      // plugins: ['@babel/plugin-external-helpers'],
      exclude: 'node_modules/**'
      // runtimeHelpers: true,
      // externalHelpers: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    uglify({
      mangle: true,
      output: {
        comments: true,
        beautify: true
      }
    })
  ]
};
