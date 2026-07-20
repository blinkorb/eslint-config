import eslintPluginNext from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

import {
  createRenamePlugin,
  modifyConfigs,
  transformWarnToError,
} from './utils/modify.ts';

export default defineConfig([
  {
    plugins: {
      next: eslintPluginNext,
    },
  },
  modifyConfigs(
    modifyConfigs([nextVitals, nextTs], transformWarnToError),
    createRenamePlugin('import', 'next-import')
  ),
]);
