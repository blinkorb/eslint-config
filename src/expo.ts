// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./@types/eslint-config-expo.d.ts" />

import { defineConfig } from 'eslint/config';
import expoConfig from 'eslint-config-expo/flat';

import {
  compose,
  createRemoveRule,
  modifyConfigs,
  transformWarnToError,
} from './utils/modify.ts';

const modifications = compose(
  createRemoveRule('@typescript-eslint/no-unused-vars'),
  transformWarnToError
);

export default defineConfig(modifyConfigs(expoConfig, modifications));
