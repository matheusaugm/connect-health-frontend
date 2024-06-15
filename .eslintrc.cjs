module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-param-reassign': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'import/extensions': 0,
    'import/no-cycle': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react/jsx-props-no-spreading': 0,
    'no-nested-ternary': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'react/function-component-definition': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'consistent-return': 0
  },
}
