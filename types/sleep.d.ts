/**
 * Pause the thread for the determined time
 *
 * @example
 * sleep();
 * sleep(2000);
 *
 * @example
 * (async function () {
 * 	console.log("Beep");
 * 	await sleep(5000);
 * 	console.log("Boop");
 * })();
 *
 * @param {number} time - time in ms to pause the thread
 * @returns {any}
 */
export function sleep(time?: number): any;
