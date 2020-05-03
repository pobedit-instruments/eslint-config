module.exports = {
    extends: [
        'eslint:recommend',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
    ],

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },

    ecmaFeatures: {
        jsx: true
    },

    settings: {
        react: {
            version: 'detect',
        },
    },

    linterOptions: {
        exclude: [
            'node_modules/**/*'
        ]
    },

    rules: {
        'complexity': [
            'error', {
                'max': 5
            }
        ],

        'max-depth': [
            'error', {
                'max': 4
            }
        ],

        'max-nested-callbacks': [
            'error', {
                'max': 3
            }
        ],

        'no-magic-numbers': [
            'error', {
                'detectObjects': false,
                'enforceConst': true,
                'ignore': [1]
            }
        ],

        'id-length': [
            'error', {
                'min': 2,
                'max': 30,
                'properties': 'never'
            }
        ],

        'indent': ['error', 4],

        'keyword-spacing': [
            'error', {
                'before': true
            }
        ],

        'lines-around-comment': [
            'error', {
                'allowBlockStart': true,
                'allowObjectStart': true,
                'allowArrayStart': true,
                'beforeBlockComment': true
            }
        ],

        'max-params': [
            'error', {
                'max': 5
            }
        ],

        'max-statements': ['error', 10],

        'max-statements-per-line': [
            'error',
            {
                'max': 1
            }
        ],

        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true
            }
        ],

        'new-cap': [
            'error', {
                'newIsCap': true
            }
        ],

        'no-trailing-spaces': [
            'error', {
                'skipBlankLines': true
            }
        ],

        'no-multiple-empty-lines': [
            'error', {
                'max': 2,
                'maxEOF': 1
            }
        ]
    },

    'no-alert': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'eqeqeq': 'error',
    'no-eq-null': 'error',
    'no-invalid-this': 'off',
    'no-loop-func': 'off',
    'no-native-reassign': 'error',
    'no-negated-condition': 'error',
    'no-new-func': 'off',
    'no-restricted-globals': 'off',
    'no-return-assign': 'error',
    'comma-dangle': ['error', 'never'],
    'semi-style': ['error', 'last'],
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': 'off',
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'generator-star-spacing': 'off',
    'no-useless-computed-key': 'error',
    'no-lone-blocks': 'error',
    'no-restricted-imports': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'off',
    'prefer-spread': 'error',
    'require-yield': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'before'],
    'strict': ['error', 'global'],
    'object-curly-spacing': ['error', 'never'],
    'linebreak-style': 'error',
    'no-multi-spaces': 'error',
    'no-nested-ternary': 'error',
    'no-octal-escape': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-whitespace-before-property': 'error',
    'no-spaced-func': 'error',
    'camelcase': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-escape': 'error',
    'array-bracket-spacing': 'off',
    'accessor-pairs': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', 'stroustrup'],
    'curly': 'error',
    'eol-last': 'error',
    'key-spacing': 'off',
    'dot-notation': 'error',
    'func-names': 'off',
    'new-parens': 'off',
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'newline-per-chained-call': 'off',
    'object-property-newline': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'padded-blocks': ['error', 'never'],
    'semi': ['error', 'always'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'yoda': 'error',
    'dot-location': ['error', 'property'],
    'consistent-this': 'off',
    'func-style': 'off',
    'max-len': ['error', 100],

    'no-new-require': 'error',
    'no-restricted-modules': 'error',
    'callback-return': 'off'
};
