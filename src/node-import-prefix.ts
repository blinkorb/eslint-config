import { defineConfig } from 'eslint/config';

import eslintPluginBlinkorb from './plugin/index.ts';

export default defineConfig({
  plugins: {
    blinkorb: eslintPluginBlinkorb,
  },
  rules: {
    'blinkorb/node-import-prefix': 'error',
  },
});
