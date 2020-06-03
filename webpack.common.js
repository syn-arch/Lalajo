const path = require("path");
const webpack = require('webpack');

module.exports = {
	entry: "./app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
		{
			test: /\.(sass|scss|css)$/,
			use: ['style-loader','css-loader','sass-loader']
		},
		{
			test: /\.(svg|eot|woff|woff2|ttf)$/,
			use: ['file-loader']
		},
		{
			test: /\.(jpe?g|png|gif|svg)$/i, 
			loader: "file-loader?name=/assets/images/[name].[ext]"
		}
		]
	},
	plugins: [
	new webpack.ProvidePlugin({
		$: "jquery",
		jQuery: "jquery",
		"window.jQuery": "jquery"
	})
	]
}