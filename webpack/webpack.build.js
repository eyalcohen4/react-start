var path = require('path');
var merge = require('webpack-merge');
var WebpackDashboard = require('webpack-dashboard');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var srcFolder   = path.resolve(__dirname, '../src');
var buildFolder = path.resolve(__dirname, '../dist'); 

var base = require('./webpack.base');

var config = {
	output: {
		filename: '[name].[hash].bundle.js',
		chunkFilename: '[name]-[chunkhash].chunk.js',		
		publicPath: buildFolder,
	},
	
	plugins: [
		new CleanWebpackPlugin(buildFolder, { root: path.resolve(__dirname, '../') }),
	],
}

module.exports = merge(base, config);