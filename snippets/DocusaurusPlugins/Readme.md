## Description
These are two simple plugins to work with [Docusaurus](https://docusaurus.io/).

Check this in a working project: https://github.com/201flaviosilva/Impacto/tree/main/docs

## Copy 2 Docusaurus

This plugin copies a file and pasts it to the docusaurus doc folder.

## Jsdoc 2 Docusaurus

This plugin generates the docs from [jsdoc](https://jsdoc.app/). 

Just need to pass an object with two properties:
- `input`: the source code of the library with the documentation based on the jsdoc;
- `output`: the output of the code;


## Example `docusaurus.config.js`

```js
const config = {
// ....
 plugins: [
    // ....
    ["./plugins/jsdoc2docusaurus.js", { files: ["../../Awesome.md", "../../CHANGELOG.md",], },], // Generate the docs from jsdoc
    ["./plugins/copy2docusaurus.js", { output: "API/", },], // Copy files to the docs folder
  ],
// ....
};
```
