import { defineConfig } from 'eslint/config';

import eslintPluginBlinkorb from './plugin/index.ts';

export default defineConfig({
  name: '@blinkorb/import-extensions',
  plugins: {
    blinkorb: eslintPluginBlinkorb,
  },
  rules: {
    'blinkorb/import-extensions': 'error',
  },
});
