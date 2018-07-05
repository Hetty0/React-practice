const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, './src/index.js') // __dirname表示当前目录
  ], 
  output: {
    path: path.resolve(__dirname, './dist'), // 输出路径
    filename: '[name]-[hash].js' // 打包后的文件
  },
  mode: 'development',
  devtool: 'eval-source-map', // source 查看源代码，有助于开发调试
  module: {
    // babel-loader: babel加载器
    // babel-preset-2015：支持es2015
    // bable-preset-react：jsx转换成js
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}