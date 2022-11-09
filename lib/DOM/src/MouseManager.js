import { EventSystem } from "201flaviosilva-utils";

/**
 * Mouse button keys
 * @memberof DOM
 */
export const MouseButton = {
	left: 0,
	middle: 1,
	right: 2,
};

/**
 * @class MouseManager
 * @classdesc Manages the mouse input.
 * 
 * @example
 * const mouse = new DOM.MouseManager();
 * const { x, y } = mouse;
 * console.log(x, y);
 * 
 * @example
 * import { DOM } from "201flaviosilva-labs";
 * const { MouseManager, MouseManagerInstance, MouseButton, } = DOM
 * const beepDiv = document.getElementById("MyDiv");
 * const mouse = new MouseManager(true);
 * setInterval(() => console.log(mouse.getPosition(beepDiv)), 1000);
 * MouseManagerInstance.events.on("buttonDown-left", () => console.log("down -> left"));
 * MouseManagerInstance.events.on("buttonDown-right", () => console.log("up -> right"));

 * 
 * @param {Boolean} [preventDefault=false] - Prevent the Default behavior on press right button
 * @memberof DOM
 */
export class MouseManager {
	constructor(preventDefault = false) {
		this.x = 0;
		this.y = 0;

		this.MouseButton = MouseButton;

		/**
		 * All pressed buttons will appear here
		 * 
		 * @example console.log(DOM.MouseManager.isPressed["left"]);
		 * @example console.log(DOM.MouseManager.isPressed[DOM.MouseManager.getNameByKeyCode(0)]);
		 * 
		 * @memberof DOM.MouseManager
		 */
		this.isDown = {};

		/**
		 * A event system to get on a key is pressed
		 * 
		 * @example DOM.MouseManagerInstance.events.on("buttonDown-left", () => console.log("down -> left"));
		 * @example DOM.MouseManagerInstance.events.on("buttonUp-left", () => console.log("up -> left"));
		 * 
		 * @memberof DOM.MouseManager
		 */
		this.events = new EventSystem();

		// --- Private Events
		window.addEventListener("mousemove", this._mousemove.bind(this));
		window.addEventListener("mousedown", this._mousedown.bind(this));
		window.addEventListener("mouseup", this._mouseup.bind(this));
		preventDefault && window.addEventListener("contextmenu", e => e.preventDefault()); // Right click show options
	}

	/**
	 * Returns the mouse position to the given DOM Element
	 * 
	 * If no given Element is passed returns de mouse in the window localization
	 * 
	 * @example
	 * const { x, y } = DOM.MouseManager.getPosition();
	 * const { x, y } = DOM.MouseManager.getPosition(document.getElementById("myDiv"));
	 * 
	 * @param {HTMLElement} [DOMElement=undefined] - The DOM Element to check the mouse position
	 * @returns {Object} The current mouse position {x, y}
	 * @memberof DOM.MouseManager
	 */
	getPosition(DOMElement) {
		if (!DOMElement) return { x: this.x, y: this.y, };

		const { x, y } = DOMElement.getBoundingClientRect();
		return { x: this.x - x, y: this.y - y, }
	}

	/**
	 * Returns the name of the button by the button code.
	 * 
	 * @example
	 * console.log(DOM.MouseManager.getNameByButtonCode(1)); // "middle"
	 * 
	 * @param {number} buttonCode - The button code
	 * @returns {string} The name of the button
	 * @memberof DOM.MouseManager
	 */
	getNameByButtonCode(buttonCode) {
		switch (buttonCode) {
			case MouseButton.left: return "left";
			case MouseButton.middle: return "middle";
			case MouseButton.right: return "right";
			default: return "";
		}
	}

	/**
	 * Returns the code of the button by the button name.
	 * 
	 * @example
	 * console.log(DOM.MouseManager.getButtonCodeByName("left")); // 0
	 * 
	 * @param {string} buttonName - The name of the button
	 * @returns {number} The button code
	 * @memberof DOM.MouseManager
	 */
	getButtonKeyByName(name) {
		switch (name) {
			case "left": return MouseButton.left;
			case "middle": return MouseButton.middle;
			case "right": return MouseButton.right;
			default: return -1;
		}
	}

	/**
	 * Returns if the button is pressed.
	 * 
	 * @example
	 * DOM.MouseManager.isButtonPressed("left") // True
	 * 
	 * @param {string|number} button - The button name or code
	 * @returns {boolean} True if the button is pressed
	 * @memberof DOM.MouseManager
	 */
	isButtonDown(button) {
		if (typeof button === "string") return this.isButtonDownByName(button);
		else if (typeof button === "number") return this.isButtonDownByButtonCode(button);
	}

	/**
	 * Returns if the button is pressed by the button name.
	 * 
	 * @example
	 * DOM.MouseManager.isButtonDownByName("left") // True
	 * 
	 * @param {string|number} button - The button name
	 * @returns {boolean} True if the button is pressed
	 * @memberof DOM.MouseManager
	 */
	isButtonDownByName(name) { return !!this.isDown[name]; }

	/**
	 * Returns if the button is pressed by the button code.
	 * 
	 * @example
	 * DOM.MouseManager.isButtonDownByName(2) // True
	 * 
	 * @param {string|number} button - The button code
	 * @returns {boolean} True if the button is pressed
	 * @memberof DOM.MouseManager
	 */
	isButtonDownByButtonCode(buttonCode) { return !!this.isDown[this.getNameByButtonCode(buttonCode)]; }


	// ------
	/**
	 * Private (Core) function to handle the mouse position.
	 * 
	 * @memberof KeyBoard
	 * @private
	 */
	_updateMousePosition(e) {
		const { clientX, clientY } = e;
		this.x = clientX;
		this.y = clientY;
	}

	/**
	 * Private (Core) function to handle the mouse position.
	 * 
	 * @memberof KeyBoard
	 * @private
	 */
	_mousemove(e) { this._updateMousePosition(e); }

	/**
	 * Private (Core) function to handle the mouse position.
	 * 
	 * @memberof KeyBoard
	 * @private
	 */
	_mousedown(e) {
		this._updateMousePosition(e);

		const name = this.getNameByButtonCode(e.button);

		this.isDown[name] = true;
		this.events.emit(`buttonDown-${name}`, { code: e.button, name, });
	}

	/**
	 * Private (Core) function to handle the mouse position.
	 * 
	 * @memberof KeyBoard
	 * @private
	 */
	_mouseup(e) {
		this._updateMousePosition(e);

		const name = this.getNameByButtonCode(e.button);

		this.isDown[name] = false;
		this.events.emit(`buttonUp-${name}`, { code: e.button, name, });
	}
}

/**
 * @example
 * const { x, y } = MouseManagerInstance;
 * console.log(x, y);
 * 
 * @memberof DOM
 */
export const MouseManagerInstance = new MouseManager();
