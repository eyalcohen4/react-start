var path = require('path');
var merge = require('webpack-merge');
var WebpackDashboard = require('webpack-dashboard');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var srcFolder   = path.resolve(__dirname, '../src');
var buildFolder = path.resolve(__dirname, '../dist'); 
var publicFolder = path.resolve(__dirname, '../assets');

var base = require('./webpack.base');

var config = {
	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		publicPath: '/',		
	},

	devServer: {
		historyApiFallback: false,
		contentBase: path.resolve(__dirname, '../src'),
		port: 4464,
		publicPath: '/',
	},

	plugins: [
	]
};

module.exports = merge(base, config);

