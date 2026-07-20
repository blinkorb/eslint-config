import importExtensions from './rules/import-extensions.ts';
import nodeImportPrefix from './rules/node-import-prefix.ts';

const plugin = {
  rules: {
    'import-extensions': importExtensions,
    'node-import-prefix': nodeImportPrefix,
  },
};

export default plugin;
