const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { default: postcss } = require("postcss");

module.exports = {
  entry: "./src/index.tsx",
  output: { 
    path: path.join(__dirname, "build"), 
    filename: "index.bundle.js" 
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: { 
    static:path.join(__dirname, "static"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "static", "index.html")
    }),
    new CopyPlugin({
      patterns: [
        {
          context: "static",
          from: "**/*",
          globOptions: {
            ignore: ["**/*.html"],
          },
        }
      ],
  }),
  ],
};