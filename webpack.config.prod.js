const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
const sharedConfig = require('./webpack.config.shared');

module.exports = {
  eslint: sharedConfig.eslint,
  devtool: 'source-map',
  entry: [...sharedConfig.entry],
  output: sharedConfig.output,
  plugins: [
    ...sharedConfig.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    extractCSS,
  ],
  module: {
    loaders: [
      ...sharedConfig.module.loaders,
      {
        test: /\.scss$/i,
        loader: extractCSS.extract(['css','sass']),
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: sharedConfig.paths.src,
      },
    ],
  },
};
