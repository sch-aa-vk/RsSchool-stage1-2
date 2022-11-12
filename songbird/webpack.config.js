const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ghpages = require('gh-pages');
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    game: "./game.js",
    main: "./index.js",
    results: "./results.js"
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    port: 4200
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "game.html",
      template: "./game.html",
      chunks: ["game"],
      inject: "body"
    }),
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      chunks: ["main"],
      inject: "body"
    }),
    new HTMLWebpackPlugin({
      filename: "results.html",
      template: "./results.html",
      chunks: ["results"],
      inject: "body"
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}