import { toggleFullScreen } from "../../../src/toggleFullScreen.js";

document.getElementById("toggle").addEventListener("click", () => {
	toggleFullScreen(document.getElementById("toggle"));
});
