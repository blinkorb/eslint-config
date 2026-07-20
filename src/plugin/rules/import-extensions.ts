import { Rule } from 'eslint';
import type {
  ExportAllDeclaration,
  ExportNamedDeclaration,
  ImportDeclaration,
  ImportExpression,
} from 'estree';

const MATCHES_RELATIVE = /^(?:\.+\/|@\/)/;
const MATCHES_FILE_EXTENSION = /\.(mjs|js|jsx|mts|ts|tsx|css|json)$/;
const MATCHES_JS_EXTENSION = /\.(mjs|js|jsx)$/;

const convertJsToTs = (value: string) =>
  value.replace(MATCHES_JS_EXTENSION, (extension) =>
    extension.replace('j', 't')
  );

const validateSource = (
  context: Rule.RuleContext,
  node:
    | ExportNamedDeclaration
    | ExportAllDeclaration
    | ImportDeclaration
    | ImportExpression,
  match: string
) => {
  const value =
    node.source?.type === 'Literal' && typeof node.source.value === 'string'
      ? node.source.value
      : null;

  if (
    value !== null &&
    MATCHES_RELATIVE.test(value) &&
    !MATCHES_FILE_EXTENSION.test(value)
  ) {
    context.report({
      node,
      message:
        'Relative imports must use file extensions. Expected {{extension}}.',
      data: {
        extension: `"${convertJsToTs(match)}"`,
      },
      fix(fixer) {
        return fixer.replaceText(
          node.source,
          `'${value}${convertJsToTs(match)}'`
        );
      },
    });
  } else if (
    value != null &&
    MATCHES_RELATIVE.test(value) &&
    MATCHES_JS_EXTENSION.test(value)
  ) {
    context.report({
      node,
      message:
        'Relative imports must use .ts extensions. Expected {{extension}}.',
      data: {
        extension: `"${convertJsToTs(match)}"`,
      },
      fix(fixer) {
        return fixer.replaceText(node.source, `'${convertJsToTs(value)}'`);
      },
    });
  }
};

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    messages: {
      avoidName: 'Enforce consistent import extensions',
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    const [match] = MATCHES_FILE_EXTENSION.exec(context.getFilename()) ?? [
      '.js',
    ];

    return {
      ExportNamedDeclaration(node) {
        validateSource(context, node, match);
      },
      ExportAllDeclaration(node) {
        validateSource(context, node, match);
      },
      ImportDeclaration(node) {
        validateSource(context, node, match);
      },
      ImportExpression(node) {
        validateSource(context, node, match);
      },
    };
  },
};

export default rule;
