module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsConfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  rules: {
    indent: [2, 2],
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/method-signature-style': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'no-underscore-dangle': 'off',
    'no-restricted-globals': 'off',
    'react/function-component-definition': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules', './build', 'dist', 'public', './config/**'],
  globals: {
    __DEV__: true,
  },
};
