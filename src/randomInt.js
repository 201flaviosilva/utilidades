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
	return Math.floor(min + Math.random() * (max - min));
};
