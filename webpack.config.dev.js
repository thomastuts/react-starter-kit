const path = require('path');
const webpack = require('webpack');
const sharedConfig = require('./webpack.config.shared');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    ...sharedConfig.entry,
  ],
  output: sharedConfig.output,
  plugins: [
    ...sharedConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
      loaders: [
        ...sharedConfig.module.loaders,
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
        },
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          include: sharedConfig.paths.src,
        },
      ],
  },
  devServer: {
    contentBase: sharedConfig.paths.dist,
    hot: true,
  }
};