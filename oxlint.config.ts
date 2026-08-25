import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'warn',
  },
  plugins: ['react'],
  rules: {
    'eslint/no-unused-vars': 'warn',
    'react/rules-of-hooks': 'error',
    'sort-imports': 'off',
  },
});
