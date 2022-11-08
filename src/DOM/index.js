import * as Device from "./Device/index.js";
import { deleteAllChildDom } from "./deleteAllChildDom.js";
import { exportFile } from "./exportFile.js";
import { getUrlParameter } from "./getUrlParameter.js";
import { KeyboardManager, KeyboardManagerInstance, KEYS } from "./KeyboardManager.js";
import { MouseManager, MouseManagerInstance, MouseButton } from "./MouseManager.js";
import { notification } from "./notification.js";
import { printObjectInDOM } from "./printObjectInDOM.js";
import { toggleFullScreen } from "./toggleFullScreen.js";

/**
 * Utils for DOM
 * @namespace DOM
 */
export {
	Device,

	deleteAllChildDom,
	exportFile,
	getUrlParameter,
	KeyboardManager, KeyboardManagerInstance, KEYS,
	MouseManager, MouseManagerInstance, MouseButton,
	notification,
	printObjectInDOM,
	toggleFullScreen,
};
