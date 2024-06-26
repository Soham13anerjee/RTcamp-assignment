const path = require("path");

module.exports = {
  entry: "./src/block.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "block.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@wordpress/babel-preset-default",
            ],
          },
        },
      },
    ],
  },
};
