import { defineConfig } from 'eslint/config';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';

export default defineConfig({
  plugins: {
    'better-tailwindcss': betterTailwindcss,
  },
  rules: {
    ...betterTailwindcss.configs['recommended-error'].rules,
    'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
  },
});
