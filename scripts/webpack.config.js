const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	optimization: { minimize: true, }, // false/true
	experiments: { outputModule: true, },
	output: {
		path: path.resolve("build"),
		filename: "utils.min.js", // "utils.js"/"utils.min.js"
		libraryTarget: "commonjs2", // module/commonjs2/window // https://webpack.js.org/configuration/output/#outputlibrarytarget
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				use: "babel-loader",
			},
		],
	},
	resolve: { extensions: [".js"], },
};
