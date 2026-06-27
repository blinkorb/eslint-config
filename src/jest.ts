import { defineConfig } from 'eslint/config';
import pluginJest from 'eslint-plugin-jest';

export default defineConfig([
  {
    name: '@blinkorb/jest',
    files: [
      '**/tests/**/*',
      '**/*.test.*',
      '**/*.spec.*',
      'jest.setup.*',
      '**/setupFilesAfterEnv.*',
    ],
    plugins: {
      jest: pluginJest,
    },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'error',
      'jest/valid-expect': 'error',
    },
  },
]);
