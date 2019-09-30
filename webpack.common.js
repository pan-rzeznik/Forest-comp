const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: ["@babel/polyfill","./src/js/main.js"]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};