// production config
const merge = require("webpack-merge")
const { resolve } = require("path")
const commonConfig = require("./common")
const Dotenv = require('dotenv-webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./client/presentation/screens/app/App.entry.tsx",
  output: {
    filename: "js/bundle.[hash].min.js",
    path: resolve(__dirname, "../../dist/assets"),
  },
  devtool: "source-map",
  plugins: [
    new Dotenv({
      path: './.env.production', // load this now instead of the ones in '.env'
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }, 
})
