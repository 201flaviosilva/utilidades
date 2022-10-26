/**
 * Returns a random value -1 or 1
 * 
 * @see {@link https://pt.wikipedia.org/wiki/Passeio_aleat%C3%B3rio}
 * 
 * @returns {number[]}
 */
export function randomWalk1D() {
	return [Math.random() < 0.5 ? -1 : 1];
}

/**
 * Return a changed random axis (x or y)
 * 
 * @see {@link https://pt.wikipedia.org/wiki/Passeio_aleat%C3%B3rio}
 * 
 * @returns {number[]}
 */
export function randomWalk2D() {
	if (Math.random() < 0.5) return [...randomWalk1D(), 0];
	else return [0, ...randomWalk1D()];
}

/**
 * Return a changed random axis (x, y or z)
 * 
 * @see {@link https://pt.wikipedia.org/wiki/Passeio_aleat%C3%B3rio}
 * 
 * @returns {number[]}
 */
export function randomWalk3D() {
	const rdn = Math.random();
	if (rdn < 0.333) return [...randomWalk1D(), 0, 0];
	if (rdn < 0.666) return [0, ...randomWalk1D(), 0];
	else return [0, 0, ...randomWalk1D()];
}


// TODO: Update this function
export function randomWalk(
	numberOfAxes = 2,
	trend = {
		left: 0.25, right: 0.25,
		up: 0.25, down: 0.25,
		front: 0, backward: 0,
	},
	bounds = {
		x: { min: -Infinity, max: Infinity, },
		y: { min: -Infinity, max: Infinity, },
		z: { min: -Infinity, max: Infinity, },
	}) {

	if (numberOfAxes === 3) {
	}
}
