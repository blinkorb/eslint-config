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

import base from '@blinkorb/eslint-config/base';
import expo from '@blinkorb/eslint-config/expo';
import importExtensions from '@blinkorb/eslint-config/import-extensions';
import jest from '@blinkorb/eslint-config/jest';
import nodeImportPrefix from '@blinkorb/eslint-config/node-import-prefix';
import react from '@blinkorb/eslint-config/react';
import tailwind from '@blinkorb/eslint-config/tailwind';
import typeorm from '@blinkorb/eslint-config/typeorm';

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
        entryPoint: './path/to/your/globals.css',
      },
    },
  },
]);
```
