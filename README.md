# @blinkorb/eslint-config

**A collection of BlinkOrb's ESLint configs**

## Setup

### Install

```bash
npm i eslint/config @blinkorb/eslint-config -D
```

### Configure

Copy and paste the following into your `eslint.config.ts` and delete as appropriate:

```ts
import { defineConfig } from 'eslint/config';

import base from '@blinkorb/eslint-config/base';
import expo from '@blinkorb/eslint-config/expo';
import jest from '@blinkorb/eslint-config/jest';
import react from '@blinkorb/eslint-config/react';

export default defineConfig([base, react, expo, jest]);
```
