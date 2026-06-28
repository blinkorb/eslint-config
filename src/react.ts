import { defineConfig } from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

import { modifyConfigs, transformWarnToError } from './utils/modify';

export default defineConfig([
  {
    ...reactPlugin.configs.flat['recommended'],
    name: '@blinkorb/react-setup',
    files: ['**/*.{js,jsx,cjs,mjs,es,ts,tsx,mts,mtsx}'],
    languageOptions: {
      ...reactPlugin.configs.flat['recommended']?.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  modifyConfigs(reactHooks.configs.flat.recommended, transformWarnToError),
  {
    name: '@blinkorb/react',
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
]);
