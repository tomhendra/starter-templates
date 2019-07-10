const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

const paths = require("./paths");

module.exports = {
  entry: paths.entryPath,
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: paths.fontsDir
            }
          }
        ]
      }
    ]
  },
  // specifies where webpack looks for files & which extensions
  resolve: {
    modules: ["src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".css", ".scss"]
  },
  plugins: [
    // output progress of webpack compilation in terminal
    new webpack.ProgressPlugin(),
    // generates html file from template (or automatically from JS)
    new HtmlWebpackPlugin({
      template: paths.templatePath,
      inject: "head"
    }),
    // modifying script loading order can lead to faster page load time by avoiding render-blocking requests.
    new ScriptExtHtmlWebpackPlugin({
      // async and defer load in parallel with HTML parsing. Async scripts will execute immediately after their load is complete, while deferred scripts will wait for the HTML parsing to complete then be executed in their respective order.
      defaultAttribute: "async"
    })
  ]
};
