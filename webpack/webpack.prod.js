const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const paths = require('./paths');

module.exports = {
  mode: 'production',
  output: {
    filename: `${paths.jsDir}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: `${paths.jsDir}/[name].[chunkhash].js`,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        // Use multi-process parallel running to improve the build speed
        parallel: true,
        // Enable file caching
        cache: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
    // Automatically split vendor and commons
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
        },
        async: {
          test: /[\\/]node_modules[\\/]/,
          name: 'async',
          chunks: 'async',
          minChunks: 4,
        },
      },
    },
    // Keep the runtime chunk separated to enable long term caching
    runtimeChunk: true,
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: true,
              camelCase: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              outputPath: paths.imagesDir,
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
          }
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${paths.cssDir}/[name].css`,
      chunkFilename: `${paths.cssDir}/[name].css`,
    }),
    // Converts images to the WebP format while also keeping the original files
    new ImageminWebpWebpackPlugin()
  ],
  devtool: 'source-map',
};
