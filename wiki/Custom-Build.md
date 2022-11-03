# Custom Build

## Description

This project is using [webpack](https://webpack.js.org/) to create a build.

So it's kinda simple to create a custom build.

Just follow the steps below.

## Step 0 - Clone the repository

(If you want you can clone the repository on [Gitpod](https://www.gitpod.io/) which will do these steps for you automatically)

To create a custom build, you need to have the repository in your machine.

### Clone
One way to do that it’s cloning the repository, opening a new terminal, and pasting this code:

(You need to have git installed on your machine)
```sh
git clone https://github.com/201flaviosilva-labs/javascript-utils.git
```

### Install the decencies

#### Move to the project folder
After clone the repository, you need to move to the project folder to start working :)
```sh
cd utilsjs
```

#### Install
Then install the dependencies
```sh
npm install
```

## Step 1 - webpack.config.js

If you want you can open the project in any code editor, I recommend [VS Code](https://code.visualstudio.com/).

In the file tree you'll find a `scripts/webpack.config.js` file, open and you will find a configuration more or less similar to the one below.

```javascript
const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	optimization: { minimize: true, }, // false/true
	experiments: { outputModule: true, },
	output: {
		path: path.resolve("build"),
		filename: "utils.min.js", // "utils.js"/"utils.min.js"
		libraryTarget: "window", // module/commonjs2/window // https://webpack.js.org/configuration/output/#outputlibrarytarget
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

```
## Step 2 - change the configuration

You probably just will want to change 3 properties:

### Optimization and Minimization
In the property `optimization` you'll find a property called `minimize` that will be used to decide if the build will be development mode or not (minimize or not).

- If you want to development build, just set it to `false`.
- If you want to production build, just set it to `true`.

### Filename
In the property `filename` you'll find the name of the file that will be created (the output file). Just change the file name to whatever name you need.
Example:

- `utils.min.js`;
- `build.js`;
- etc...

### Library Target
In the property `libraryTarget` you'll find the target of the library.

- If you want to create a module build, just set it to `module`.
- If you want to create a node build, just set it to `commonjs2`.
- If you want to create a window build, just set it to `window`.
- Etc... you can find more information in the [webpack documentation](https://webpack.js.org/configuration/output/#outputlibrarytarget).

## Step 3 - Build

Finally, you'll need to run the command `webpack --mode production --config ./scripts/webpack.config.js` in the terminal.

Check your folder tree, and in the folder build you'll find the file build file with the name of the file you've changed in the configuration.
