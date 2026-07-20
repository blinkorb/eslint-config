import { defineConfig } from 'eslint/config';

import eslintPluginBlinkorb from './plugin';

export default defineConfig({
  plugins: {
    blinkorb: eslintPluginBlinkorb,
  },
  rules: {
    'blinkorb/import-extensions': 'error',
  },
});
