module.exports = {
  // 'testEnvironment': 'jsdom',
  'moduleDirectories': [
    'src',
    'node_modules'
  ],
  'moduleNameMapper': {
    '\\.module\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(css|scss)$': require.resolve('./src/tests/style.mock.js'),
    '\\.(jpg|gif|ttf|eot|svg)$': require.resolve('./src/tests/file.mock.js')
  },
  // 'transform': {
  //   '^.+\\.(js|jsx)$': 'babel-jest',
  //   '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform'
  // },
  // 'setupFiles': [
  //   'raf/polyfill',
  //   '<rootDir>setupTests.js'
  // ],
  // 'moduleFileExtensions': [
  //   'css',
  //   'scss',
  //   'js',
  //   'json',
  //   'jsx'
  // ],
  // 'snapshotSerializers': [
  //   'enzyme-to-json/serializer'
  // ]
}