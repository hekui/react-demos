module.exports = {
	entry:{
		index:__dirname+ '/src/index.jsx',
		index_es6:__dirname+ '/src/index_es6.jsx'
	},
	output:{
		filename: "./dest/[name].bundle.js",
		chunkFilename: "./dest/[id].js"
	},
	module: {
        loaders: [{
            test: /\.coffee$/,
            loader: 'coffee-loader'
        }, {
            test: /\.css$/,
            loader: "css-loader"
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015','react']
            }
        }]
    }
}
