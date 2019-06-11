const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');

const paths = require('./paths');

module.exports = {
  entry: paths.entryPath,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            // Exports HTML as string & minimize output
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: paths.fontsDir,
            }
          }
        ]
      }
    ]
  },
  serve: {
    add: app => {
      app.use(convert(history()));
    },
    content: paths.entryPath,
    dev: {
      publicPath: paths.outputPath,
    },
    open: true,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // generates html file from template (or automatically from JS) with all asset imports
    new HtmlWebpackPlugin({
      template: paths.templatePath,
      inject: 'head'
    }),
    // can lead to faster page load time
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    })
  ]
};
