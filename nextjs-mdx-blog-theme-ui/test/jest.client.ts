module.exports = {
  ...require('./jest.common'),
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // make jestDOM expect assertion extensions available to all tests automatically.
  snapshotSerializers: ['@emotion/jest/serializer'], // include our emotion CSS styles via Theme UI in our React component snapshots.
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', // default
    '**/?(*.)+(spec|test).[jt]s?(x)', // default
    '!**/?(*.)ssr.+(spec|test).[jt]s?(x)', // ignore files with ext of .ssr.test.js/ts(x) which are handled by jest.server.ts
  ],
};

export {};
