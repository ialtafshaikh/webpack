const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    pageCSE: path.join(__dirname, "src", "cse.js"),
    pageRAW: path.join(__dirname, "src", "raw.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "./src/[name].[contenthash].bundle.js",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/ },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: "file-loader",
        options: {
          outputPath: "images",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      filename: "index.html",
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      filename: "./pages/cse.html",
      template: path.join(__dirname, "pages", "cse.html"),
      chunks: ["pageCSE"],
    }),
    new HtmlWebpackPlugin({
      filename: "./pages/raw.html",
      template: path.join(__dirname, "pages", "raw.html"),
      chunks: ["pageRAW"],
    }),
    new CleanWebpackPlugin(),
  ],
  mode: "development",
};
