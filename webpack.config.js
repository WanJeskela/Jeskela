const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	entry: {
		'js/bundle.js': './src/entry/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]'
	},
	resolve: {
		alias: {
			style: path.resolve(__dirname, 'src/style'),
			app: path.resolve(__dirname, 'src/app'),
			data: path.resolve(__dirname, 'src/data'),
			helpers: path.resolve(__dirname, 'src/helpers')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.json$/,
				loader: 'file-loader',
				type: 'javascript/auto',
				options: {
					name: '[name].[ext]'
				},
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/entry/template.html"
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	]
}