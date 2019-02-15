module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  // extends: 'standard',
  extends: [
    '@nuxtjs',
    'standard',
    // 'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {},
  globals: {}
}
