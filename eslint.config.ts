/* eslint-disable blinkorb/import-extensions */
import { defineConfig } from 'eslint/config';

import base from './src/base';
import expo from './src/expo';
import importExtensions from './src/import-extensions';
import jest from './src/jest';
import next from './src/next';
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
  next,
  {
    settings: {
      'better-tailwindcss': {
        // if using tailwind
        entryPoint: './test-files/globals.css',
      },
      next: {
        // if using next in a monorepo
        rootDir: './test-files/next/',
      },
    },
  },
]);
