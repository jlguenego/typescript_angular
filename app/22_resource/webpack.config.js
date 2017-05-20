const path = require('path');
module.exports = {
	entry: {
		bundle: path.resolve(__dirname, './main.ts')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './wpk')
	},
	module: {
		rules: [{
			test: /\.ts$/,
			exclude: /node_modules/,
			use: [{
				loader: 'ng-annotate-loader'
			}, {
				loader: 'ts-loader'
			}]
		}]
	}
};
