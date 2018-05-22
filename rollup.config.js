const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');

export default {
  input: 'src/index.js',
  output: {
    format: 'es',
    file: 'buid.js'
  },
  plugins: [
    resolve({
      jsnext: true
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
