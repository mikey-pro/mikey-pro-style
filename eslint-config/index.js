const path = require('node:path');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'react-app-bump',
    'plugin:unicorn/all',
    'plugin:compat/recommended',
    'plugin:css-modules/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    '**/dist/**/*',
    '**/vendor/**/*',
    '*.properties',
    '*.cclibs',
    '*.svg',
    '*.png',
    '*.aco',
    '*.psd',
    '*.ai',
    '*.ase',
    '*.sh',
    '*.ico',
    'package-lock.json',
    'LICENSE',
    'CNAME',
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue', '.svelte'],
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: path.join(__dirname, '../../..'),
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/naming-convention': 0,
        'import/default': 0,
        'import/named': 0,
        'import/namespace': 0,
        'import/no-named-as-default-member': 0,
        'import/no-unresolved': 0,
        'prettier/prettier': [1, { parser: 'typescript' }],
      },
    },
    {
      files: ['*.css'],
      rules: {
        'prettier/prettier': [1, { parser: 'css' }],
      },
    },
    {
      files: ['*.scss'],
      rules: {
        'prettier/prettier': [1, { parser: 'scss' }],
      },
    },
    {
      files: ['*.less'],
      rules: {
        'prettier/prettier': [1, { parser: 'less' }],
      },
    },
    {
      extends: ['plugin:yaml/recommended'],
      files: ['*.yaml', '*.yml'],
      plugins: ['yaml'],
      rules: {
        'prettier/prettier': [1, { parser: 'yaml' }],
      },
    },
    {
      extends: ['plugin:toml/standard'],
      files: ['*.toml'],
      parser: 'toml-eslint-parser',
      rules: {
        'prettier/prettier': 0,
      },
    },
    {
      files: ['*.md'],
      parser: 'eslint-plugin-markdownlint/parser',
      extends: ['plugin:markdownlint/recommended'],
      rules: {
        'markdownlint/md033': 0,
        'markdownlint/md041': 0,
        'prettier/prettier': [1, { parser: 'markdown' }],
      },
    },
    {
      files: ['*.md.json'],
      rules: {
        'prettier/prettier': [1, { parser: 'json' }],
      },
    },
    {
      extends: ['plugin:@html-eslint/recommended'],
      files: ['*.html'],
      parser: '@html-eslint/parser',
      plugins: ['@html-eslint'],
      rules: {
        '@html-eslint/indent': 0,
        '@html-eslint/no-extra-spacing-attrs': 0,
        '@html-eslint/require-closing-tags': 0,
        'disable-autofix/@html-eslint/require-closing-tags': [
          1,
          { selfClosing: 'always' },
        ],
        'spaced-comment': 0,
        'prettier/prettier': [1, { parser: 'html' }],
      },
    },
    {
      extends: ['plugin:vue/vue3-recommended'],
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        babelOptions: {
          plugins: [
            'eslint-plugin-vue',
            [
              '@babel/plugin-transform-react-jsx',
              {
                pragma: 'h',
                pragmaFrag: 'Fragment',
                runtime: 'automatic',
              },
            ],
          ],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: 'current',
                },
              },
            ],
          ],
        },
        ecmaVersion: 'latest',
        requireConfigFile: false,
        sourceType: 'module',
      },
      rules: {
        'prettier/prettier': 1,
        'vue/component-tags-order': [
          1,
          {
            order: [['script', 'template'], 'style'],
          },
        ],
        'vue/html-self-closing': [
          1,
          {
            html: {
              component: 'always',
              normal: 'always',
              void: 'always',
            },
            math: 'always',
            svg: 'always',
          },
        ],
      },
    },
    {
      files: ['*.svelte'],
      extends: ['plugin:svelte/all'],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        'import/first': 0,
        'import/no-duplicates': 0,
        'import/no-mutable-exports': 0,
        'import/no-unresolved': 0,
        'prettier/prettier': 0,
      },
    },
    {
      extends: ['plugin:jsonc/recommended-with-jsonc'],
      files: ['*.jsonc', '*rc'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'prettier/prettier': [1, { parser: 'json' }],
      },
    },
    {
      extends: ['plugin:jsonc/recommended-with-json5'],
      files: ['*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'prettier/prettier': [1, { parser: 'json5' }],
      },
    },
    {
      files: ['*.test.*'],
      plugins: ['jest'],
      extends: ['plugin:jest/all'],
      rules: {
        'unicorn/no-array-callback-reference': 0,
        'jest/unbound-method': 0,
      },
    },
    {
      files: ['*.cy.*'],
      plugins: ['cypress'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
      ],
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'css-modules',
    'disable-autofix',
    '@babel',
    'unicorn',
    'only-warn',
    '@cypress/json',
  ],
  root: true,
  rules: {
    camelcase: 1,
    'class-methods-use-this': 0,
    'constructor-super': 1,
    'dot-notation': 1,
    'func-names': 0,
    'import/extensions': [1, 'never', { ignorePackages: true }],
    'import/no-commonjs': 0,
    'import/no-unresolved': [
      1,
      { amd: true, commonjs: true, ignore: ['^node:'] },
    ],
    'import/order': [
      1,
      {
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'jsx-quotes': 1,
    'keyword-spacing': 1,
    'no-caller': 1,
    'no-confusing-arrow': 1,
    'no-console': 0,
    'no-const-assign': 1,
    'no-delete-var': 1,
    'no-dupe-class-members': 1,
    'no-dupe-keys': 1,
    'no-duplicate-imports': 1,
    'no-else-return': 1,
    'no-empty': 0,
    'no-empty-pattern': 0,
    'no-extra-parens': 0,
    'no-extra-bind': 1,
    'no-extra-semi': 1,
    'no-floating-decimal': 1,
    'no-iterator': 1,
    'no-lonely-if': 1,
    'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
    'no-multi-str': 1,
    'no-new-wrappers': 1,
    'no-process-exit': 0,
    'no-proto': 1,
    'no-redeclare': 1,
    'no-restricted-syntax': [
      1,
      {
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement',
      },
      {
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement',
      },
      {
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement',
      },
    ],
    'no-shadow': 0,
    'no-shadow-restricted-names': 1,
    'no-spaced-func': 1,
    'no-this-before-super': 1,
    'no-undef-init': 1,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 1,
    'no-unused-vars': [
      1,
      {
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-useless-call': 1,
    'no-useless-computed-key': 1,
    'no-useless-concat': 1,
    'no-useless-constructor': 1,
    'no-useless-escape': 1,
    'no-useless-rename': 1,
    'no-useless-return': 1,
    'no-var': 1,
    'no-with': 1,
    'object-curly-spacing': [0, 'always'],
    'object-shorthand': 1,
    'prefer-arrow-callback': 1,
    'prefer-destructuring': [
      1,
      {
        array: false,
        object: true,
      },
    ],
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'prefer-const': 0,
    'disable-autofix/prefer-const': 1,
    'prettier/prettier': [1, { parser: 'babel' }],
    'quote-props': [1, 'as-needed'],
    quotes: [
      0,
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    radix: 1,
    'react/display-name': [1, { ignoreTranspilerName: false }],
    'react/function-component-definition': [
      0,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-curly-spacing': 1,
    'react/jsx-key': [1, { checkFragmentShorthand: true }],
    'react/jsx-no-bind': [
      1,
      {
        allowArrowFunctions: true,
        allowFunctions: true,
        ignoreRefs: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-target-blank': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-tag-spacing': [1, { beforeSelfClosing: 'always' }],
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-find-dom-node': 1,
    'react/no-is-mounted': 1,
    'react/no-string-refs': 1,
    'filenames/match-regex': 0,
    'react/prefer-es6-class': 1,
    'react/prefer-stateless-function': 1,
    'react/require-render-return': 1,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],
    'react/state-in-constructor': 0,
    'require-atomic-updates': 0,
    'sort-imports': 0,
    'rest-spread-spacing': 0,
    semi: 0,
    'sort-vars': 1,
    'space-before-function-paren': [
      0,
      { anonymous: 'always', asyncArrow: 'always', named: 'never' },
    ],
    'space-in-parens': [0, 'never'],
    'spaced-comment': [
      1,
      'always',
      {
        block: {
          balanced: true,
          exceptions: ['*'],
          markers: ['!'],
        },
        line: {
          exceptions: ['-', '+'],
          markers: ['/'],
        },
      },
    ],
    strict: [1, 'never'],
    'unicode-bom': 1,
    'unicorn/filename-case': [
      1,
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: ['.*.md'],
      },
    ],
    'unicorn/import-index': [1, { ignoreImports: true }],
    'valid-jsdoc': 0,
  },
  settings: {
    polyfills: ['Promise'],
    react: {
      version: 'detect',
    },
    jest: {
      version: 29,
    },
    'json/json-with-comments-files': [],
    'json/package-json-sort-order': [
      'name',
      'version',
      'description',
      'private',
      'main',
      'type',
      'types',
      'typings',
      'browser',
      'engines',
      'scripts',
      'husky',
      'dependencies',
      'devDependencies',
      'peerDependencies',
      'files',
      'bin',
      'productName',
      'homepage',
      'repository',
      'bugs',
      'license',
      'keywords',
      'author',
      'contributors',
      'funding',
    ],
  },
};
