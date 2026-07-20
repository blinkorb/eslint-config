/* eslint-disable blinkorb/import-extensions */
import { defineConfig } from 'eslint/config';

import base from './src/base';
import expo from './src/expo';
import importExtensions from './src/import-extensions';
import jest from './src/jest';
import nodeImportPrefix from './src/node-import-prefix';
import react from './src/react';
import tailwind from './src/tailwind';
import typeorm from './src/typeorm';

export default defineConfig([
  base,
  react,
  expo,
  jest,
  typeorm,
  importExtensions,
  nodeImportPrefix,
  tailwind,
  {
    settings: {
      'better-tailwindcss': {
        entryPoint: './test-files/globals.css',
      },
    },
  },
]);
