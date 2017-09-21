var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');

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
				enforce: 'pre',
				test: /\.(js|jsx)/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(js|jsx)/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [   
						{ loader: 'css-loader', options: { sourceMap: true } },
						{ loader: 'postcss-loader', options: { sourceMap: true } },
						{ loader: 'sass-loader', options: { sourceMap: true } } 
				],
				}),
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader', options: { sourceMap: true } },
						{ loader: 'postcss-loader', options: { sourceMap: true } },
						{ loader: 'sass-loader', options: { sourceMap: true } } 
					],
				}),
			}
		]
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			template: path.resolve(__dirname, '../src/index.html'),
		}),

		new ExtractTextPlugin({ filename: '[name].bundle.css', allChunks: true }),

	],
}