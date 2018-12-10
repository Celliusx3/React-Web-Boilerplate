// Shared Config (dev and prod)
const theme = require("../../theme.json")
const { resolve } = require("path")
const webpack = require("webpack")
const { CheckerPlugin } = require("awesome-typescript-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ManifestPlugin = require("webpack-manifest-plugin")

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      client: resolve(__dirname, "../../src/client"),
    },
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader", "source-map-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "awesome-typescript-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          { loader: "less-loader", options: { modifyVars: theme, javascriptEnabled: true } },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({ template: "index.html.ejs" }),
    new ManifestPlugin({ fileName: "manifest.json" }),
    new webpack.DefinePlugin({
      "process.env.BROWSER": JSON.stringify(true),
    }),
  ],
  performance: {
    hints: false,
  },
  node: {
    fs: "empty"
  }
}
