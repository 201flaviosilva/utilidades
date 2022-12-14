export namespace MouseButton {
    const left: number;
    const middle: number;
    const right: number;
}
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
    constructor(preventDefault?: boolean);
    x: number;
    y: number;
    MouseButton: {
        left: number;
        middle: number;
        right: number;
    };
    /**
     * All pressed buttons will appear here
     *
     * @example console.log(DOM.MouseManager.isPressed["left"]);
     * @example console.log(DOM.MouseManager.isPressed[DOM.MouseManager.getNameByKeyCode(0)]);
     *
     * @memberof DOM.MouseManager
     */
    isDown: {};
    /**
     * A event system to get on a key is pressed
     *
     * @example DOM.MouseManagerInstance.events.on("buttonDown-left", () => console.log("down -> left"));
     * @example DOM.MouseManagerInstance.events.on("buttonUp-left", () => console.log("up -> left"));
     *
     * @memberof DOM.MouseManager
     */
    events: any;
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
    getPosition(DOMElement?: HTMLElement): any;
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
    getNameByButtonCode(buttonCode: number): string;
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
    getButtonKeyByName(name: any): number;
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
    isButtonDown(button: string | number): boolean;
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
    isButtonDownByName(name: any): boolean;
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
    isButtonDownByButtonCode(buttonCode: any): boolean;
    /**
     * Private (Core) function to handle the mouse position.
     *
     * @memberof KeyBoard
     * @private
     */
    private _updateMousePosition;
    /**
     * Private (Core) function to handle the mouse position.
     *
     * @memberof KeyBoard
     * @private
     */
    private _mousemove;
    /**
     * Private (Core) function to handle the mouse position.
     *
     * @memberof KeyBoard
     * @private
     */
    private _mousedown;
    /**
     * Private (Core) function to handle the mouse position.
     *
     * @memberof KeyBoard
     * @private
     */
    private _mouseup;
}
/**
 * @example
 * const { x, y } = MouseManagerInstance;
 * console.log(x, y);
 *
 * @memberof DOM
 */
export const MouseManagerInstance: MouseManager;
