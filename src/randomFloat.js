/**
 * Return a random float number between the given values and the given precision
 * 
 * @example
 * randomFloat(0, 1);
 * randomFloat(-10, 0, 5);
 * randomFloat(-550, 444);
 * 
 * @param {number} [min=0] - min value
 * @param {number} [max=1] - max value
 * @param {number} [precision=2] - the float precision
 * @returns {number} - random float number
 */
export function randomFloat(min = 0, max = 1, precision = 2) {
	if (!max) {
		max = min;
		min = 0;
	}
	return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}
