const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry:{
		home: path.resolve(__dirname, 'src/js/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'js/[name].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					// 'style-loader',este lo injecta 
					// {
					// 	loader: MiniCSSExtractPlugin.loader
					// },
					MiniCSSExtractPlugin.loader,
					'css-loader'
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			// title: 'name' podemos cambiar el nombre del ouput
			minify: false
		}),
		new MiniCSSExtractPlugin({
			filename: 'css/[name].css', // este crea el archivo
		}),
	]
};
