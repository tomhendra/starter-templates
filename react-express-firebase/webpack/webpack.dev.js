const webpack = require('webpack');

const paths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: paths.outputDir,
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        // css modules rule
        test: /\.scss/,
        // loaders are executed from right to left (bottom-to-top)
        exclude: /node_modules/,
        use: [
          // 3. creates style nodes from JS strings; outputs CSS into <style> tags
          'style-loader',
          {
            // 2. translates CSS into CommonJS; parses the CSS into JavaScript and resolves any dependencies.
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              camelCase: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          // 1. compiles Sass to CSS, using Node Sass by default
          'sass-loader',
        ]
      },
      {
        // vendor css rule
        test: /node_modules\/.*\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: paths.imagesDir
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: paths.outputPath,
    // enable gzip compression for everything served
    compress: true,
    // enable Hot Module Replacement (HMR) feature
    hot: true,
    // redirects to index.html on server request for page
    historyApiFallback: true
  },
  plugins: [
    // HMR allows all kinds of modules to be updated at runtime without the need for a full refresh
    new webpack.HotModuleReplacementPlugin(),
    // define firebase auth with environmental variables using process.env
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
  // lighter weight source map for dev - more efficient to use inline since webpack will have less file to resolve and read
  devtool: 'inline-source-map'
};
