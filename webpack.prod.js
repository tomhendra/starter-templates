const merge = require('webpack-merge');
const common = require('./webpack.common');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

module.exports = merge.smart(common, {
  mode: 'production',
  devtool: 'source-map',
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    {
      // loaders (plural) used with array to enable smart merge with file-loader rule from common
      loaders: ['image-webpack-loader'],
      options: {
        // mozjpeg: lossy jpg compressor
        mozjpeg: {
          progressive: true,
          quality: 75
        },
        // optipng: enabled by default. Quality > pngquant but compression < pngquant
        optipng: {
          enabled: false,
        },
        // lossy png compressor
        pngquant: {
          quality: '75-90',
          speed: 4
        },
        // lossless gif compressor
        gifsicle: {
          interlaced: false,
        }
      }
    },
  ],
  plugins: [
    // Converts images to the WebP format while also keeping the original files
    new ImageminWebpWebpackPlugin()
  ]
});
