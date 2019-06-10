const path = require('path');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              // Speeds up initial & subsequent compilations while developing or using webpack-dev-server. 
              // disable: true,
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
              },
            }
          },
        ],
      }
    ]
  },
  plugins: [
    // Converts images to the WebP format while also keeping the original files
    new ImageminWebpWebpackPlugin()
  ]
};