const webpack = require('webpack')
const { resolve } = require("path")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './client/presentation/screens/app/App.entry.tsx',
  context: resolve(__dirname, "./src"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader"],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },   
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }, 
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  node: {
    fs: "empty"
  }
};