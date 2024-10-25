import js from '@eslint/js';
import eslintPluginJson from 'eslint-plugin-json';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
    },
    plugins: {
      ['react-hooks']: reactHooks,
      ['react-refresh']: reactRefresh,
      ['simple-import-sort']: simpleImportSort,
      ['prettier']: prettier,
      ['unicorn']: eslintPluginUnicorn,
      ['json']: eslintPluginJson,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      'json/*': ['error'],
      'simple-import-sort/imports': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-var': 'error',
      'no-mixed-operators': 'error',
      'prefer-const': 'error',
      'no-nested-ternary': 'off',
      'unicorn/no-array-instanceof': 'error',
      camelcase: ['error', { properties: 'always' }],
      'object-shorthand': ['error', 'always'],
    },
  }
);
