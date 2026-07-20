import { defineConfig } from 'eslint/config';

export default defineConfig({
  name: '@blinkorb/typeorm',
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'typeorm',
            importNames: ['BaseEntity'],
            message: 'Please use BaseEntity from ./BaseEntity.ts instead.',
          },
        ],
      },
    ],
  },
});
