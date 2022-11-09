export namespace KEYS {
    const enter: number;
    const escape: number;
    const space: number;
    const left: number;
    const up: number;
    const right: number;
    const down: number;
    const num0: number;
    const num1: number;
    const num2: number;
    const num3: number;
    const num4: number;
    const num5: number;
    const num6: number;
    const num7: number;
    const num8: number;
    const num9: number;
    const q: number;
    const w: number;
    const e: number;
    const r: number;
    const t: number;
    const y: number;
    const u: number;
    const i: number;
    const o: number;
    const p: number;
    const a: number;
    const s: number;
    const d: number;
    const f: number;
    const g: number;
    const h: number;
    const j: number;
    const k: number;
    const l: number;
    const z: number;
    const x: number;
    const c: number;
    const v: number;
    const b: number;
    const n: number;
    const m: number;
}
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
    /**
     * All pressed keys will appear here
     *
     * @example console.log(DOM.KeyboardManagerInstance.isPressed["left"]);
     * @example console.log(DOM.KeyboardManagerInstance.isPressed[DOM.KeyboardManagerInstance.getNameByKeyCode(37)]);
     *
     * @memberof DOM.KeyboardManager
     */
    isPressed: {};
    /**
     * A event system to get on a key is pressed
     *
     * @example DOM.KeyboardManagerInstance.events.on("keyDown-left", () => console.log("down -> left"));
     * @example DOM.KeyboardManagerInstance.events.on("keyUp-left", () => console.log("up -> left"));
     *
     * @memberof DOM.KeyboardManager
     */
    events: any;
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
    getNameByKeyCode(keyCode: number): string;
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
    getKeyCodeByName(name: string): number;
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
    isKeyPressed(key: number | string): boolean;
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
    isKeyPressedName(name: string): boolean;
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
    isKeyPressedKeyCode(keyCode: number): boolean;
    /**
     * @description
     * Private (Core) function to handle the key down event.
     *
     * @memberof DOM.KeyboardManager
     * @private
     */
    private _keyDown;
    /**
     * @description
     * Private (Core) function to handle the key press event.
     *
     * @memberof DOM.KeyboardManager
     * @private
     */
    private _keyPress;
    /**
     * @description
     * Private (Core) function to handle the key up event.
     *
     * @memberof DOM.KeyboardManager
     * @private
     */
    private _keyUp;
}
/**
 * @memberof DOM
 */
export const KeyboardManagerInstance: KeyboardManager;
