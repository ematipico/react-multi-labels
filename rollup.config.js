import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
export default {
  input: 'src/index.js',
  output: {
    format: 'es',
    file: 'react-multi-labels.min',
    name: 'react-multi-labels.min'
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
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
    // uglify({
    //   compress: {
    //     pure_getters: true,
    //     unsafe: true,
    //     unsafe_comps: true,
    //     warnings: false
    //   }
    // })
  ]
};
