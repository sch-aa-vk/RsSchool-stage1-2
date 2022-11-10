const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./index.js",
    heading: "./heading.js",
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
      filename: "index.html",
      template: "./index.html",
      chunks: ["main"],
      inject: "body"
    }),
    new HTMLWebpackPlugin({
      filename: "heading.html",
      template: "./heading.html",
      chunks: ["heading"],
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