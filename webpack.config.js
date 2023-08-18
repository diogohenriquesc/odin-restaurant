const path = require('path');

module.exports = {
	entry: './src/index.js',
	devtool: 'inline-source-map',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
			},
		],
	},
};
