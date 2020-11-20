const jsParserOptions = {
  ecmaVersion: 2020,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
}

const tsFiles = ['**/*.ts', '**/*.tsx']

module.exports = {
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    node: true,
    browser: false,
  },
  parserOptions: jsParserOptions,
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'node_modules',
  ],
  overrides: [
    {
      files: tsFiles,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ...jsParserOptions,
        project: './tsconfig.json',
      },
      plugins: ['total-functions'],
      extends: [],
      rules: {
        'total-functions/no-unsafe-readonly-mutable-assignment': 1,
      },
    },
  ],
}
