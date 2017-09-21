var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var srcFolder   = path.resolve(__dirname, '../src');
var buildFolder = path.resolve(__dirname, '../dist'); 

module.exports = {
	target: 'web',
	entry: './index.js',
	context: srcFolder,
	devtool: 'source-map',

	output: {
		path: buildFolder,
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json', '.scss'],
		alias: {
			'@': srcFolder,
		}
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				]
			}
		]
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			template: path.resolve(__dirname, '../src/index.html'),
		}),
	],
}