module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'nuxt/no-cjs-in-config': 'off',
    // 'space-before-function-paren': 'off',
    'curly': 0, // 允许单行if无{}
    'vue/singleline-html-element-content-newline': 0, // 允许html标签在一行
    'vue/html-closing-bracket-newline': 0, // 允许html标签在一行
    'vue/no-v-html': 0, // 允许html标签在一行
    'vue/multiline-html-element-content-newline': 0, // 允许html标签在一行
    'vue/html-self-closing': 0, // 允许html标签在一行
    'space-before-function-paren': 0,
    'eol-last': 0,
    'arrow-parens': ["error", "as-needed"] // 单个参数箭头函数省略括号
  }
}
