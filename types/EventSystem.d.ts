/**
 * @class EventSystem
 * @classdesc A simple event system
 *
 * @example
 * // Normal Event
 * const events = new EventSystem();
 * events.on("test", (num1, num2) => { console.log(num1, num2); });
 * events.emit("test", 1, 2);
 * events.off("test");
 * events.emit("test", 3, 4); // Nothing happens
 *
 * @example
 * // Once Event
 * const events = new EventSystem();
 * events.on("testOnce", (num1, num2) => { console.log("testOnceOn", num1, num2); });
 * events.once("testOnce", (num1, num2) => { console.log("testOnceOnce", num1, num2); });
 * events.emit("testOnce", 5, 6);
 */
export class EventSystem {
    /**
     * Events
     * @private
     */
    private events;
    /**
     * Start listening the event
     *
     * @example events.on("eventName", (num1, num2) => { console.log(num1, num2); });
     *
     * @param {string} event - the event name
     * @param {function} callback - a function callback
     * @returns {void}
     * @memberof EventSystem
     */
    on(event: string, callback: Function): void;
    /**
     * Dispatch the event to the listeners
     *
     * @example events.emit("eventName", 1, 2);
     *
     * @param {string} event - event name
     * @param  {...any} args - all arguments to pass
     * @returns {void}
     * @memberof EventSystem
     */
    emit(event: string, ...args: any[]): void;
    /**
     * Remove the listener
     *
     * @example events.off("eventName");
     *
     * @param {string} event - event name
     * @returns {void}
     * @memberof EventSystem
     */
    off(event: string): void;
    /**
     * Listening the event but just only one time
     *
     * @example events.once("eventName", (num1, num2) => { console.log("testOnceOnce", num1, num2); });
     *
     * @param {string} event - the event name
     * @param {function} callback - a function callback
     * @returns {void}
     * @memberof EventSystem
     */
    once(event: string, callback: Function): void;
    /**
     * Remove all the events
     *
     * @example events.clear();
     * @returns {void}
     * @memberof EventSystem
     */
    clear(): void;
    /**
     * Check if the event exists
     *
     * @param {string} event - th event name
     * @returns {boolean}
     * @memberof EventSystem
     */
    has(event: string): boolean;
}
/**
 *
 * @example
 * // Normal Event
 * EventSystemInstance.on("test", (num1, num2) => { console.log(num1, num2); });
 * EventSystemInstance.emit("test", 1, 2);
 * EventSystemInstance.off("test");
 * EventSystemInstance.emit("test", 3, 4);
 *
 * @example
 * // Once Event
 * EventSystemInstance.on("testOnce", (num1, num2) => { console.log("testOnceOn", num1, num2); });
 * EventSystemInstance.once("testOnce", (num1, num2) => { console.log("testOnceOnce", num1, num2); });
 * EventSystemInstance.emit("testOnce", 5, 6);
 */
export const EventSystemInstance: EventSystem;
