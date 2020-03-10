/* eslint-disable key-spacing */
// eslint-disable-next-line no-undef

// eslint-disable-next-line no-undef
const path = require("path");

// eslint-disable-next-line no-unused-vars
const cleanPlugin = require("clean-webpack-plugin");// eslint-disable-next-line no-undef
module.exports = {
  mode: "production",
  // eslint-disable-next-line sort-keys
  devtool: "cheap-source-map",
  entry: "./src/app.js",
  output: {
    filename: "[contenthash].js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/"
  },
  // eslint-disable-next-line sort-keys
  devServer: {
    contentBase: "./"
  },
  plugins : [new cleanPlugin.CleanWebpackPlugin()]
};
