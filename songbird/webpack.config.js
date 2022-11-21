const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ghpages = require('gh-pages');

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    game: "./game.js",
    main: "./index.js",
    results: "./results.js",
    gallery: "./gallery.js"
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
    new HTMLWebpackPlugin({
      filename: "gallery.html",
      template: "./gallery.html",
      chunks: ["gallery"],
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