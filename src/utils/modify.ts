import { Config } from 'eslint/config';

import { AnyArray, AnyConfig } from '../types.ts';

const isArray = <T>(input: T): input is Extract<T, AnyArray> =>
  Array.isArray(input);

export const transformWarnToError = (config: Config): Config => ({
  ...config,
  rules: {
    ...Object.fromEntries(
      Object.entries(config.rules ?? {}).map(([key, value]) => {
        if (value === 'warn' || value === 1) {
          return [key, 2];
        }

        if (isArray(value)) {
          const [severity, ...options] = value;

          if (severity === 'warn' || severity === 1) {
            return [key, [2, ...options]];
          }
        }

        return [key, value];
      })
    ),
  },
});

export const modifyConfigs = (
  config: AnyConfig,
  callback: (config: Config) => Config
): AnyConfig => {
  if (isArray(config)) {
    return config.map((subConfig) => modifyConfigs(subConfig, callback));
  }

  return callback(config);
};
