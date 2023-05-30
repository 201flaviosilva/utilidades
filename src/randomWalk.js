/**
 * Generates a random walk in the specified dimension.
 * 
 * @example 
 * randomWalk(100, 2); // [x, y] -> [3, -2]
 * randomWalk(35, 3); // [x, y, z] -> [1, -5, 2]
 * 
 * @param {number} steps - The number of steps to take in the random walk.
 * @param {number} dimension - The dimensionality of the random walk (1, 2, or 3).
 * 
 * @returns {number[]} The coordinates of the random walk in the specified dimension.
 */
export function randomWalk(steps, dimension = 2) {
	let position = new Array(dimension).fill(0);

	for (let i = 0; i < steps; i++) {
		const random = Math.random();
		const axis = Math.floor(random * dimension);

		if (random < 0.5) position[axis]++;
		else position[axis]--;
	}

	return position;
}
