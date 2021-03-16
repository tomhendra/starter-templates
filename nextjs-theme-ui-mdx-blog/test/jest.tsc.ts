import path from 'path';

module.exports = {
  rootDir: path.join(__dirname, '..'),
  displayName: 'tsc',
  runner: 'jest-runner-tsc',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testMatch: ['**/?(*.)+(ts|tsx)'],
};
