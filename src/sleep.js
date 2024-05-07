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
export async function sleep(time = 1000) {
	if (typeof time !== "number" || time < 0 || isNaN(time)) {
		throw new Error("Time must be a non-negative number");
	}
	return new Promise(resolve => setTimeout(resolve, time));
}

