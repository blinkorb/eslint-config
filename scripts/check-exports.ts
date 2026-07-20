import fs from 'node:fs';
import path from 'node:path';

import packageJson from '../package.json';

const EXCLUDED_FILES = ['types.ts'];

const EXPORTED_FILES = Object.values(packageJson.exports);

const ROOT_DIR = path.resolve(__dirname, '../');
const SRC_DIR = path.resolve(ROOT_DIR, './src');

fs.readdirSync(SRC_DIR).forEach((fileOrDirectory) => {
  if (EXCLUDED_FILES.includes(fileOrDirectory)) {
    return;
  }

  const fullPath = path.resolve(SRC_DIR, fileOrDirectory);
  const relativeToRoot = `./${path.relative(ROOT_DIR, fullPath)}`;

  if (!fs.lstatSync(fullPath).isDirectory()) {
    if (!EXPORTED_FILES.includes(relativeToRoot)) {
      throw new Error(
        `No export for "${relativeToRoot}" in package.json "exports"`
      );
    }
  }
});
