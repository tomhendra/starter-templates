module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json',
  },
  settings: { react: { version: 'detect' } },
  env: { node: true, browser: true, jest: true },
  plugins: [
    'prettier',
    '@typescript-eslint/eslint-plugin',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended', // disables ESLint rules that TypeScript renders unnecessary.
    'plugin:@typescript-eslint/recommended', // specific typescript-eslint plugin rules that are sometimes useful e.g. for interfaces.
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/prop-types': 'off', // TypeScript handles prop types
    'react/jsx-uses-react': 'off', // note required using new transform: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/react-in-jsx-scope': 'off', // not required for Next.js
    'jsx-a11y/anchor-is-valid': 'off', // incompatible with Next.js <Link /> (https://github.com/vercel/next.js/issues/5533)
    '@typescript-eslint/no-unused-vars': ['error'], // default is warn
    '@typescript-eslint/explicit-module-boundary-types': 'off', // handled by explicit-function-return-type: https://github.com/typescript-eslint/typescript-eslint/issues/2719
    '@typescript-eslint/explicit-function-return-type': 'off', // default is warn & provide options objects. prefer inference.
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }], // warn on unformatted code & use usePrettierrc rules
  },
};
