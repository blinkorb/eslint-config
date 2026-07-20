import { defineConfig } from 'eslint/config';

import base from './src/base';
import expo from './src/expo';
import jest from './src/jest';
import react from './src/react';
import typeorm from './src/typeorm';

export default defineConfig([base, react, expo, jest, typeorm]);
