import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^.*\.svg$/i,
        replacement: path.resolve(import.meta.dirname, 'src/common/config/tests/svg-mock.tsx'),
      },
      { find: '@common', replacement: path.resolve(import.meta.dirname, 'src/common') },
      { find: '@modules', replacement: path.resolve(import.meta.dirname, 'src/modules') },
      { find: '@pages', replacement: path.resolve(import.meta.dirname, 'src/pages') },
    ],
  },
  test: {
    environment: 'jsdom',
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    setupFiles: ['./src/common/config/tests/setup.ts'],
  },
});
