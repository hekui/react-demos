module.exports = {
	entry:{
		'input-state_es6':'./src/input-state_es6.jsx'
	},
	output:{
		path:'./dest/',
		filename: "[name].bundle.js",
		chunkFilename: "[id].js"
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
