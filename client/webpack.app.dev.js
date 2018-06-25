/* global require, module */
var webpackConfig = require('./webpack.app.base.js');
var webpack = require('webpack');

webpackConfig.devServer = {
  host: 'localhost',
  port: 3000,
  historyApiFallback: true,
  hot: true
};

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    __ENV__: '"dev"',
    PRODUCTION: false,
    __API_URL__: "'http://localhost:4000'"
  })
);

module.exports = webpackConfig;
