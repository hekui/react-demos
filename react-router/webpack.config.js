var values = require('postcss-modules-values');
module.exports = {
	entry:__dirname + '/index.js',
	output:{
		filename:'app.bundle.js',
		chunkFilename: "[id].js"
	},
	module:{
		loaders:[{
			test:/\.css$/,
			loader:'style-loader!css-loader?modules!postcss-loader'
		},
		{
			test:/\.js$/,
			exclude:/(node_modules|bower_components)/,
			loader:'babel',
			query:{
				presets:['es2015','react']
			}
		}]
	},
	postcss: [
		values
	]
}
