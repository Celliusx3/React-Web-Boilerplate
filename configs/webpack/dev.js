// development config
const merge = require("webpack-merge")
const webpack = require("webpack")
const commonConfig = require("./common")
const Dotenv = require('dotenv-webpack')

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: [
    "react-hot-loader/patch", // activate HMR for React
    "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./client/presentation/screens/app/App.entry.tsx", // the entry point of our app
  ],
  devServer: {
    historyApiFallback: true,
    hot: true, // enable HMR on the server
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new Dotenv({
      path: './.env.development', // load this now instead of the ones in '.env'
    }),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ],
})