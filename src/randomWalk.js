/**
 * Perform a random walk in two dimensions.
 * 
 * @param {number} steps - The number of steps to take in the random walk.
 * @returns {{x: number, y: number}} - The final position after the random walk, with x and y coordinates.
 */
export function randomWalk(steps) {
	let x = 0;
	let y = 0;

	for (let i = 0; i < steps; i++) {
		const random = Math.random();

		if (random < 0.25) x++;
		else if (random < 0.5) x--;
		else if (random < 0.75) y++;
		else y--;
	}

	return { x, y };
}
