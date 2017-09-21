/* eslint-disable */

const path = require('path');
const merge = require('webpack-merge');
const WebpackDashboard = require('webpack-dashboard');
const webpack = require('webpack');
const base = require('./webpack.base');

const config = {
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } }),
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../src'),
    port: 4464,
    publicPath: '/',
  },
};

module.exports = merge(base, config);

