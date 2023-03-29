module.exports = {
  root: true,
  env: {
    'jest/globals': true,
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:jsdoc/recommended'
  ],
  plugins: [
    'jsdoc'
  ],
  // add your custom rules here
  rules: {
    'import/order': 'warn',
    'vue/require-component-is': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    'vue/no-v-html': 'off'
  }
}
