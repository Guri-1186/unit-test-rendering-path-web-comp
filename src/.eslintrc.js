module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'], // Add 'plugin:prettier/recommended' for Prettier integration
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'linebreak-style': 'off',
    'prettier/prettier': 'error', // Enable the prettier/prettier rule for Prettier integration
  },
};
