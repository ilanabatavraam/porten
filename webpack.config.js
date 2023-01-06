const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV || 'production', // development, production, none
	entry: './src/scripts/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: [
					  ['@babel/preset-env', { targets: "defaults" }]
					]
				  }
				}
			  },
			  {
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader'
			  }  
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({template: './src/index.html'}),
	],
};
