import { MouseManager, MouseManagerInstance, MouseButton, } from "../../../../src/DOM/index.js";
console.log(MouseButton);
const beepDiv = document.getElementById("beep");

const mouse = new MouseManager(true);

setInterval(() => {
	console.log(mouse.getPosition(beepDiv));
}, 1000);

MouseManagerInstance.events.on("buttonDown-left", () => console.log("down -> left"));
MouseManagerInstance.events.on("buttonDown-right", () => console.log("up -> right"));
