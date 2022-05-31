// import * as Utils from "../../../src/index.js";
// import { DOM } from "../../../src/index.js";
// import * as DOM from "../../../src/DOM/index.js";
import { notification } from "../../../src/DOM/index.js";
// import { notification } from "../../../src/DOM/Notification.js";

notification({ text: "notification" });

document.getElementById("button").addEventListener("click", () => {
	// Utils.DOM.notification({ text: "Utils.DOM.notification" });
	// DOM.notification({ text: "DOM.notification" });
	notification({
		text: "My nice text",
		animated: false,
		animationTime: 5,
		closeButton: true,
		endPosition: 250,
		style: { border: "10px solid rgb(0, 255, 100)", },
		textStyle: { textTransform: "uppercase", },
		buttonStyle: { backgroundColor: "red" },
	});
});
