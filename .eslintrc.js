module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'arrow-parens': ['warn', 'as-needed'],
    'babel/new-cap': 0,
    'react/prop-types': 0,
    'new-cap': [0, { 'newIsCap': false, 'capIsNew': false }],
    'require-jsdoc': 0,
    'valid-jsdoc': [
      'error', {
        'requireReturn': false,
        'requireReturnType': false,
        'requireReturnDescription': false,
        'requireParamType': false,
        'requireParamDescription': false,
        'prefer': {
          'return': 'returns',
        },
      },
    ],
    'max-len': ['error', {
      'code': 120,
      'ignoreComments': true,
      'ignoreStrings': true,
    }],
    'object-curly-spacing': ['error', 'always'],
    'no-console': 'off',
    'quotes': [
      'error',
      'single',
    ],
    'indent': ['error', 2],
    // we want to avoid useless spaces
    'no-multi-spaces': ['error'],
    'no-unused-vars': ['warn'],
    'linebreak-style': ['error', 'windows'],
  },
};
