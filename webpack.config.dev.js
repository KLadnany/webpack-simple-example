var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: [
      './src/index.js',
      "webpack-hot-middleware/client?reload=true"
    ]
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
