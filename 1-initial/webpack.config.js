const path = require("path");

const config = {
  entry: {
    filename: path.join(__dirname, "src", "main.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
};

module.exports = config;
