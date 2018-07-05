'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, './dist'), // 默认会以根文件提供本地服务器，这里指定文件夹
  historyApiFallback: true, // 在开发单页面应用时非常有用，依赖于HTML5 History API，如果设置为true，所有的跳转将指向index.html
  port: 9000, // 省略则默认为：8080
  publicPath: "/",
  inline: true, // 自动刷新
  hot: true // 开启模块热替换
});

server.listen(9000, 'localhost', function(err) {
  if(err) {
    throw err;
  }
});
