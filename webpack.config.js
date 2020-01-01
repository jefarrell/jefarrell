const webpack = require('webpack');
const PROD = JSON.parse(process.env.PROD_ENV || '0');
const path = require('path');

const PATHS = {
	build: path.join(__dirname, './public')
}

module.exports = {

	entry: './src/index.js',

	output: {
		path: PATHS.build,
		filename: PROD ? 'bundle.min.js' : 'bundle.js',
		publicPath: './public'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env"]
					},
				},
			},
			{
				test: /\.s?css$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader',
				],
			},
		]
	},
	plugins: []
 };