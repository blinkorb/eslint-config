import { defineConfig } from 'eslint/config';

export default defineConfig({
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
