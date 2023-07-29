module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'indent':'off',
    'linebreak-style': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-console': "off",
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'prefer-const': 'error',
    'prefer-template': 'error',
  },
};
