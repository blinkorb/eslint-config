import eslintPluginNext from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

import {
  compose,
  createRemoveRule,
  createRenamePlugin,
  modifyConfigs,
  transformWarnToError,
} from './utils/modify.ts';

const modifications = compose(
  createRemoveRule('@typescript-eslint/no-unused-vars'),
  createRenamePlugin('import', 'next-import'),
  transformWarnToError
);

export default defineConfig([
  {
    plugins: {
      next: eslintPluginNext,
    },
  },
  modifyConfigs([nextVitals, nextTs], modifications),
]);
