import { EventSystem } from "201flaviosilva-utils";

/**
 * Keys code for the keyboard
 * @memberof DOM
 */
export const KEYS = {
	enter: 13,
	escape: 27,
	space: 32,

	left: 37,
	up: 38,
	right: 39,
	down: 40,

	num0: 48,
	num1: 49,
	num2: 50,
	num3: 51,
	num4: 52,
	num5: 53,
	num6: 54,
	num7: 55,
	num8: 56,
	num9: 57,

	q: 81,
	w: 87,
	e: 69,
	r: 82,
	t: 84,
	y: 89,
	u: 85,
	i: 73,
	o: 79,
	p: 80,
	a: 65,
	s: 83,
	d: 68,
	f: 70,
	g: 71,
	h: 72,
	j: 74,
	k: 75,
	l: 76,
	z: 90,
	x: 88,
	c: 67,
	v: 86,
	b: 66,
	n: 78,
	m: 77,
};

/**
 * @class KeyboardManager
 * @classdesc Manages the keyboard input.
 * 
 * @example
 * const { left } = DOM.KeyboardManagerInstance.keys;
 * if (DOM.KeyboardManagerInstance.isKeyPressed(left)) console.log("Left");
 * 
 * @example
 * import { DOM } from "201flaviosilva-labs";
 * const { KEYS, KeyboardManager, KeyboardManagerInstance } = DOM;
 * setInterval(() => console.log(KeyboardManagerInstance.isKeyPressed(KEYS.a)), 100);
 * KeyboardManagerInstance.events.on("keyDown-left", () => console.log("down-left"));
 * KeyboardManagerInstance.events.on("keyUp-up", () => console.log(`up-${KEYS.up}`));
 * 
 * @memberof DOM
 */
export class KeyboardManager {
	constructor() {
		/**
		 * All pressed keys will appear here
		 * 
		 * @example console.log(DOM.KeyboardManagerInstance.isPressed["left"]);
		 * @example console.log(DOM.KeyboardManagerInstance.isPressed[DOM.KeyboardManagerInstance.getNameByKeyCode(37)]);
		 * 
		 * @memberof DOM.KeyboardManager
		 */
		this.isPressed = {};

		/**
		 * A event system to get on a key is pressed
		 * 
		 * @example DOM.KeyboardManagerInstance.events.on("keyDown-left", () => console.log("down -> left"));
		 * @example DOM.KeyboardManagerInstance.events.on("keyUp-left", () => console.log("up -> left"));
		 * 
		 * @memberof DOM.KeyboardManager
		 */
		this.events = new EventSystem();

		window.addEventListener("keydown", this._keyDown.bind(this));
		window.addEventListener("keypress", this._keyPress.bind(this));
		window.addEventListener("keyup", this._keyUp.bind(this));
	}

	/**
	 * @description
	 * Returns the name of the key by its keyCode.
	 * 
	 * @example
	 * const { left } = DOM.KeyboardManagerInstance.keys;
	 * console.log(DOM.KeyboardManagerInstance.getNameByKeyCode(left)); // left
	 * 
	 * @param {number} keyCode - The key code of the key.
	 * @returns {string} The name of the key.
	 * @memberof DOM.KeyboardManager
	 */
	getNameByKeyCode(keyCode) {
		return Object.keys(KEYS).find(key => KEYS[key] === keyCode);
	}

	/**
	 * @description
	 * Returns the key code of the key by its name.
	 * 
	 * @example
	 * console.log(DOM.KeyboardManagerInstance.getKeyCodeByName("left")); // 37
	 * 
	 * @param {string} name - The name of the key.
	 * @returns {number} The key code of the key.
	 * @memberof DOM.KeyboardManager
	 */
	getKeyCodeByName(name) {
		return KEYS[name];
	}

	/**
	 * @description
	 * Returns true if the key is pressed.
	 * 
	 * @example
	 * const { left } = DOM.KeyboardManagerInstance.keys;
	 * DOM.KeyboardManagerInstance.isKeyPressed(left); // false
	 * 
	 * @param {number| string} key - The key code or name of the key.
	 * @returns {boolean} True if the key is pressed.
	 * @memberof DOM.KeyboardManager
	 */
	isKeyPressed(key) {
		if (typeof key === "string") return this.isKeyPressedName(key);
		else if (typeof key === "number") return this.isKeyPressedKeyCode(key);
	}

	/**
	 * @description
	 * Returns true if the key is pressed by its name.
	 * 
	 * @example
	 * DOM.KeyboardManagerInstance.isKeyPressedName("left"); // true
	 * 
	 * @param {string} name - The name of the key.
	 * @returns {boolean} True if the key is pressed.
	 * @memberof DOM.KeyboardManager
	 */
	isKeyPressedName(name) {
		return !!this.isPressed[name];
	}

	/**
	 * @description
	 * Returns true if the key is pressed by its key code.
	 * 
	 * @example
	 * DOM.KeyboardManagerInstance.isKeyPressedKeyCode(37); // true
	 * 
	 * @param {number} keyCode - The key code of the key.
	 * @returns {boolean} True if the key is pressed.
	 * @memberof DOM.KeyboardManager
	 */
	isKeyPressedKeyCode(keyCode) {
		return !!this.isPressed[this.getNameByKeyCode(keyCode)];
	}

	// ---- Private
	/**
	 * @description
	 * Private (Core) function to handle the key down event.
	 * 
	 * @memberof DOM.KeyboardManager
	 * @private
	 */
	_keyDown({ keyCode }) {
		this.isPressed[this.getNameByKeyCode(keyCode)] = true;

		const name = this.getNameByKeyCode(keyCode);
		this.events.emit(`keyDown-${name}`, { code: keyCode, name, });
	}

	/**
	 * @description
	 * Private (Core) function to handle the key press event.
	 * 
	 * @memberof DOM.KeyboardManager
	 * @private
	 */
	_keyPress(e) {
		// console.log("keypress", e.keyCode);
	}

	/**
	 * @description
	 * Private (Core) function to handle the key up event.
	 * 
	 * @memberof DOM.KeyboardManager
	 * @private
	 */
	_keyUp({ keyCode }) {
		this.isPressed[this.getNameByKeyCode(keyCode)] = false;

		const name = this.getNameByKeyCode(keyCode);
		this.events.emit(`keyUp-${this.getNameByKeyCode(keyCode)}`, { code: keyCode, name, });
	}
}

/**
 * @memberof DOM
 */
export const KeyboardManagerInstance = new KeyboardManager();
