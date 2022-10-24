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

/**
 * Return a random integer number between the given values and the given precision
 * 
 * @example
 * randomInt(0, 1);
 * randomInt(-10, 0);
 * randomInt(-550, 444);
 * 
 * @param {number} min - min value
 * @param {number} max - max value
 * @returns {number} random integer number
 */
export function randomInt(min, max) {
	if (!max) {
		max = min;
		min = 0;
	}
	return Math.round(min + Math.random() * (max - min));
};

/**
 * Return a random number between the given values and the given precision
 * 
 * @example
 * randomNumber(0, 1);
 * randomNumber(-10, 0, 5);
 * randomNumber(-550, 444);
 * 
 * @param {number} min - min value
 * @param {number} max - max value
 * @returns {number} - random number
 */
export function randomNumber(min, max) { return randomFloat(min, max) };
