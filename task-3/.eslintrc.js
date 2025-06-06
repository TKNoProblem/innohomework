module.exports = {
  env: {
    browser: true,
    es2021: true,
    worker: true, // Enable Web Worker globals
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-restricted-globals': ['error', {
      name: 'self',
      message: 'Use window instead.',
    }],
  },
  overrides: [
    {
      files: ['**/*.worker.ts', '**/worker.ts'],
      rules: {
        'no-restricted-globals': 'off', // Disable the rule for worker files
      },
    },
  ],
}; 