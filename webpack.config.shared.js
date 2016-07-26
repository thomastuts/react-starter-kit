const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: './dist',
};

module.exports = {
  paths: PATHS,
  entry: [
    path.join(PATHS.src, 'index.js'),
  ],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.src, 'index.html'),
    }),
  ],
  module: {
      preLoaders: [
        {
          test: /\.js$/,
          loaders: ['eslint-loader'],
          exclude: /node_modules/,
        },
      ],
      loaders: [
        {
          test: /\.svg$/,
          loader: 'svg-inline'
        },
      ],
  },
};