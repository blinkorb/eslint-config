// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./@types/eslint-config-expo.d.ts" />

import { defineConfig } from 'eslint/config';
import expoConfig from 'eslint-config-expo/flat';

import { modifyConfigs, transformWarnToError } from './utils/modify.ts';

export default defineConfig(modifyConfigs(expoConfig, transformWarnToError));
