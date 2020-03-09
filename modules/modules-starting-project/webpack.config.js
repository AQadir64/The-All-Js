// eslint-disable-next-line no-undef

// eslint-disable-next-line no-undef
const path = require("path");
// eslint-disable-next-line no-undef
module.exports = {
  mode: "development",
  // eslint-disable-next-line sort-keys
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/"
  },
  // eslint-disable-next-line sort-keys
  devServer: {
    contentBase: "./"
  }
};
