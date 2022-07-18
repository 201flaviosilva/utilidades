import { KEYS, KeyboardManager, KeyboardManagerInstance } from "../../../../src/DOM/index.js";
console.log(KEYS);

setInterval(() => {
	console.log(KeyboardManagerInstance.isKeyPressed(KEYS.a));
}, 100);

KeyboardManagerInstance.events.on("keyDown-left", () => { console.log("down-left"); });
KeyboardManagerInstance.events.on("keyUp-up", () => { console.log(`up-${KEYS.up}`); });
