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
				test: /\.s?css$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}

		]
	},
	plugins: []
 };