import { defineConfig } from 'eslint/config';

import eslintPluginBlinkorb from './plugin/index.ts';

export default defineConfig({
  name: '@blinkorb/node-import-prefix',
  plugins: {
    blinkorb: eslintPluginBlinkorb,
  },
  rules: {
    'blinkorb/node-import-prefix': 'error',
  },
});
