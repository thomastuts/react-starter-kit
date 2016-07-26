const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  config: path.join(__dirname, 'config'),
  dist: './dist',
};

const BABEL_SETTINGS = JSON.parse(fs.readFileSync(path.join(PATHS.config, '.babelrc'), 'utf8'));
const ENV = process.env.NODE_ENV;
const BABEL_LOADER_NAME_WITH_SETTINGS = `babel?${JSON.stringify(BABEL_SETTINGS)}`;

module.exports = {
  eslint: {
    configFile: path.join(PATHS.config, '.eslintrc'),
  },
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
        {
          test: /\.js$/,
          loaders: ENV === 'development' ? ['react-hot', BABEL_LOADER_NAME_WITH_SETTINGS] : [BABEL_LOADER_NAME_WITH_SETTINGS],
          include: PATHS.src,
        },
      ],
  },
};
