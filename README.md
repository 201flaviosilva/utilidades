# 201flaviosilva-UtilsJS

## Description
Just some simple JavaScript Utils.

## Usage

### Using NPM (Recommend)
#### Install Package
```sh
npm i 201flaviosilva-utils
```

#### Import to the project
```js
import { randomNumber } from "201flaviosilva-utils";

console.log(randomNumber(1, 20));
```

### Using CDN (jsdelivr)
```html
<script src="https://cdn.jsdelivr.net/npm/201flaviosilva-utils@1.2.5/build/utils.min.js"></script>
<script src="./your-js-file.js"></script>
```

```js
// ./your-js-file.js
console.log(randomNumber(1, 20));
```

## Available Commands

| Command               | Description                                                                     |
| --------------------- | ------------------------------------------------------------------------------- |
| `npm install`         | Install project dependencies                                                    |
| `npm run clear`       | Delete the "build" and "types" and "docs" folder                                |
| `npm run jsDoc`       | Build a docs page based in the jsdoc                                            |
| `npm run types`       | Build the types                                                                 |
| `npm run compile`     | Builds code bundle with production settings (minification, etc..)               |
| `npm run build`       | Bundle the code, create the types and teh docs folder                           |
| `npm run bump`        | Update lib in the npm                                                           |

## Links
- [WebPage](https://201flaviosilva.gitlab.io/utilsjs/);
- [Package](https://www.npmjs.com/package/201flaviosilva-utils);
- [GitLab](https://gitlab.com/201flaviosilva/utilsjs/);
	- [Issues](https://gitlab.com/201flaviosilva/utilsjs/-/issues);

	## Examples
	- [Code Sandbox](https://codesandbox.io/examples/package/201flaviosilva-utils);
