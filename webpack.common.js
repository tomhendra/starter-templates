const path = require('path');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

// conditional logic to determine which firebase database to use, test or main
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    // serves up index.html in the dist folder every time there is a 404
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            // loaders (plural) uses with array to enable smart merge with production
            loaders: ['file-loader'],
            options: {
              name: isDevelopment ? '[name].[ext]' : 'images/[name].[hash].[ext]'
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isDevelopment ? '[name].[ext]' : 'fonts/[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // cleans up dist folder on new build or dev-server start
    new CleanWebpackPlugin(),
    // generates html file from template (or automatically from JS)
    new HtmlWebpackPlugin({
      title: 'React Boilerplate',
      filename: 'index.html',
      template: './src/index.html',
      inject: 'head'
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : 'styles/[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : 'styles/[id].[hash].css'
    }),
    // Converts images to the WebP format while also keeping the original files
    new ImageminWebpWebpackPlugin(),
    // uses env to point to environmental variables
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_MESSAGING_SENDER': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER),
      'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
    })
  ],
  output: {
    filename: 'scripts/[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
};