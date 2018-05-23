module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      allowImportExportEverywhere: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['babel', 'react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/prop-types': [1]
  },
  globals: { React: true, PropTypes: true }
};
