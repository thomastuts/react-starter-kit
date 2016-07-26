const path = require('path');
const webpack = require('webpack');
const sharedConfig = require('./webpack.config.shared');

module.exports = {
  eslint: sharedConfig.eslint,
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
      preLoaders: sharedConfig.module.preLoaders,
      loaders: [
        ...sharedConfig.module.loaders,
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
        },
      ],
  },
  devServer: {
    contentBase: sharedConfig.paths.dist,
    hot: true,
  }
};
