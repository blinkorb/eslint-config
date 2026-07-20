import { Rule } from 'eslint';
import type { ImportDeclaration, ImportExpression } from 'estree';

const MATCHES_NODE_MODULE =
  /^(?:node:)?(assert|buffer|child_process|cluster|crypto|dgram|dns|domain|events|fs|http|http2|https|net|os|path|punycode|querystring|readline|stream|string_decoder|timers|tls|tty|url|util|v8|vm|zlib)/;
const MATCHES_NODE_PREFIX = /^node:/;

const validateSource = (
  context: Rule.RuleContext,
  node: ImportDeclaration | ImportExpression
) => {
  const value =
    node.source.type === 'Literal' && node.source.value === 'string'
      ? node.source.value
      : null;

  if (value !== null && MATCHES_NODE_MODULE.test(value)) {
    if (!MATCHES_NODE_PREFIX.test(value)) {
      context.report({
        node,
        message: 'NodeJS core modules must use the "node:" prefix.',
        fix(fixer) {
          return fixer.replaceText(node.source, `'node:${value}'`);
        },
      });
    }
  }
};

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    messages: {
      avoidName: 'Enforce "node:" prefix for NodeJS core modules',
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        validateSource(context, node);
      },
      ImportExpression(node) {
        validateSource(context, node);
      },
    };
  },
};

export default {
  rules: {
    'node-import-prefix': rule,
  },
};
