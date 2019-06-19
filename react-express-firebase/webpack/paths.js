const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../', 'src'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  imagesDir: 'images',
  fontsDir: 'fonts',
  cssDir: 'css',
  jsDir: 'js',
};