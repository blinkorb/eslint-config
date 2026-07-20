import importExtensions from './rules/import-extensions';
import nodeImportPrefix from './rules/node-import-prefix';

const plugin = {
  rules: {
    'import-extensions': importExtensions,
    'node-import-prefix': nodeImportPrefix,
  },
};

export default plugin;
