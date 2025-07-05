import angularPlugin from '@angular-eslint/eslint-plugin';
import angularTemplatePlugin from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import rxjsPlugin from '@smarttools/eslint-plugin-rxjs';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importPlugin from 'eslint-plugin-import';
import unusedImportPlugin from 'eslint-plugin-unused-imports';
import ngrxPlugin from '@ngrx/eslint-plugin';
import stylisticPlugin from '@stylistic/eslint-plugin'

export default [
  {
    ignores: ['.cache/', '.git/', '.github/', 'node_modules/'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: 'tsconfig.eslint.json',
        createDefaultProgram: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@angular-eslint': angularPlugin,
      'simple-import-sort': simpleImportSort,
      'import': importPlugin,
      'rxjs': rxjsPlugin,
      'unused-imports': unusedImportPlugin,
      'ngrx': ngrxPlugin,
      '@stylistic': stylisticPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...angularPlugin.configs.recommended.rules,
      'array-callback-return': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'block-scoped-var': 'error',
      'camelcase': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'consistent-return': 'error',
      'curly': 'error',
      'eqeqeq': ['error', 'smart'],
      'getter-return': 'error',
      'guard-for-in': 'error',
      'max-classes-per-file': 'error',
      'new-cap': ['error', { 'capIsNew': false }],
      'no-constant-binary-expression': 'warn',
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-eq-null': 'error',
      'no-irregular-whitespace': 'error',
      'no-labels': 'error',
      'no-multi-assign': 'error',
      'no-new': 'error',
      'no-redeclare': 'error',
      'no-sequences': 'error',
      'no-setter-return': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-unexpected-multiline': 'error',
      'no-useless-catch': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'one-var': ['warn', 'never'],
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      'semi': 'error',
      'space-before-blocks': 'warn',
      'spaced-comment': ['warn', 'always', { 'block': { 'exceptions': ['*'] } }],
      'use-isnan': 'error',
      'valid-typeof': 'error',

      'rxjs/no-async-subscribe': 'error',
      'rxjs/no-compat': 'error',
      'rxjs/no-create': 'error',
      'rxjs/no-ignored-replay-buffer': 'error',
      'rxjs/no-nested-subscribe': 'error',
      'rxjs/no-topromise': 'error',
      'rxjs/no-unsafe-takeuntil': [
        'error',
        { 'alias': ['takeUntilDestroyed'] }
      ],

      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/max-len': ['error', {
        'code': 140,
        'tabWidth': 2,
        'ignoreTrailingComments': true,
        'ignoreComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true
      }],
      '@stylistic/max-statements-per-line': ['error', { 'max': 1 }],
      '@stylistic/new-parens': 'error',
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-newline': ['error', { 'consistent': true }],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/semi-spacing': 'error',
      '@stylistic/semi-style': ['error', 'last'],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-unary-ops': 'error',
      '@stylistic/spaced-comment': ['error', 'always'],
      '@stylistic/switch-colon-spacing': 'error',
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/template-tag-spacing': ['error', 'never'],

      '@stylistic/block-spacing': 'error',
      '@stylistic/brace-style': 'error',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      '@stylistic/keyword-spacing': ['error', { 'before': true, 'after': true }],
      '@stylistic/lines-around-comment': ['error', { 'beforeBlockComment': true }],
      '@stylistic/member-delimiter-style': 'error',
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': ['error', 'never'],
      '@stylistic/type-annotation-spacing': ['error', {
        'before': false,
        'after': true,
        'overrides': {
          'arrow': {
            'before': true,
            'after': true
          }
        }
      }],

      'simple-import-sort/imports': [
        'error',
        {
          'groups': [
            ['^@angular\/.*$'],
            ['^@ng.*$', '^@ngx.*$', '^ng.*$', '^ngx.*$', '^angular.*$'],
            ['^@common.*$'],
            ['^[a-zA-Z].*$'],
            ['^..\/.*$'],
            ['^.\/.*$']
          ]
        }
      ],

      'unused-imports/no-unused-imports': 'error',

      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',

      '@angular-eslint/directive-selector': ['error', { 'type': 'attribute', 'prefix': ['app', 'vx'], 'style': 'camelCase' }],
      '@angular-eslint/component-selector': ['error', { 'type': 'element', 'prefix': ['app', 'vx'], 'style': 'kebab-case' }],
      '@angular-eslint/no-empty-lifecycle-method': 'error',
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/prefer-on-push-component-change-detection': 'warn',
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/use-pipe-transform-interface': 'error',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          'selector': 'variable',
          'format': [
            'camelCase',
            'UPPER_CASE'
          ]
        },
        {
          'selector': 'parameter',
          'format': ['camelCase']
        },
        {
          'selector': 'memberLike',
          'format': ['camelCase'],
          'leadingUnderscore': 'allow'
        },
        {
          'selector': 'enumMember',
          'format': ['PascalCase']
        },
        {
          'selector': 'classProperty',
          'modifiers': ['readonly'],
          'format': ['camelCase', 'UPPER_CASE'],
          'leadingUnderscore': 'allow'
        },
        {
          'selector': 'objectLiteralProperty',
          'format': ['camelCase', 'snake_case']
        },
        {
          'selector': 'typeLike',
          'format': ['PascalCase']
        },
        {
          'selector': 'typeProperty',
          'format': ['camelCase', 'snake_case']
        }
      ],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/prefer-find': 'error',
      '@typescript-eslint/prefer-optional-chain': 'warn',

      'arrow-parens': ['off', 'always'],
      'no-else-return': 'off',
      'no-fallthrough': 'off',
      'no-prototype-builtins': 'off',
      'no-trailing-spaces': 'off',
      'no-unsafe-optional-chaining': 'off',
      'no-unused-vars': 'off',
      '@angular-eslint/component-class-suffix': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'rxjs/throw-error': 'off',
      '@ngrx/prefer-effect-callback-in-block-statement': 'off',
      '@ngrx/prefer-inline-action-props': 'off'
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser,
      parserOptions: {
        project: 'tsconfig.eslint.json',
        createDefaultProgram: true,
        ecmaVersion: 2022,
        sourceType: 'module',
      }
    },
    plugins: {
      '@angular-eslint': angularPlugin,
      '@angular-eslint/template': angularTemplatePlugin,
    },
    rules: {
      '@angular-eslint/template/no-duplicate-attributes': 'error',
      '@angular-eslint/template/button-has-type': 'error',
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/no-interpolation-in-attributes': 'error',
      '@angular-eslint/template/attributes-order': ['error', {
        'alphabetical': true,
        'order': [
          'STRUCTURAL_DIRECTIVE',
          'ATTRIBUTE_BINDING',
          'INPUT_BINDING',
          'TWO_WAY_BINDING',
          'OUTPUT_BINDING',
          'TEMPLATE_REFERENCE'
        ]
      }],

      '@angular-eslint/template/no-negated-async': 'off',
      '@angular-eslint/template/elements-content': 'off',
      '@angular-eslint/template/no-call-expression': 'off'
    },
  },
];
