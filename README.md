# @blinkorb/eslint-config

**A collection of BlinkOrb's ESLint configs**

## Setup

### Install

```bash
npm i @blinkorb/eslint-config -D
```

### Configure

Copy and paste the following and delete as appropriate:

```ts
import { defineConfig } from 'eslint/config';

import base from './src/base';
import expo from './src/expo';
import jest from './src/jest';
import react from './src/react';

export default defineConfig([base, react, expo, jest]);
```
