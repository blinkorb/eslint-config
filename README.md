# @blinkorb/eslint-config

**A collection of BlinkOrb's ESLint configs**

## Setup

### Install

```bash
npm i eslint prettier typescript @blinkorb/eslint-config -D
```

### Configure

Copy and paste the following into your `eslint.config.ts` and delete as appropriate:

Note: you may need to install `jiti` to use `.ts` extension on your `eslint.config`.

```ts
import { defineConfig } from 'eslint/config';

import base from './src/base';
import expo from './src/expo';
import jest from './src/jest';
import react from './src/react';
import typeorm from './src/typeorm';
// Custom plugin
import importExtensions from './src/import-extensions';
import nodeImportPrefix from './src/node-import-prefix';

export default defineConfig([
  base,
  react,
  expo,
  jest,
  typeorm,
  importExtensions,
  nodeImportPrefix,
]);
```
