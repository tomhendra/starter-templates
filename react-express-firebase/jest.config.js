module.exports = {
  // 'testEnvironment': 'jsdom',
  moduleDirectories: ["src", "node_modules"],
  moduleNameMapper: {
    "\\.module\\.(css|scss)$": "identity-obj-proxy",
    "\\.(css|scss)$": require.resolve("./src/tests/styleMock.js"),
    "\\.(jpg|gif|ttf|eot|svg)$": require.resolve("./src/tests/fileMock.js")
  },
  setupFiles: ["<rootDir>/src/tests/setupTests.js", "jest-localstorage-mock"]
};
