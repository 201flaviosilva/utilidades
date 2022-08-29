export function randomWalk1D() {
	return [Math.random() < 0.5 ? -1 : 1];
}

export function randomWalk2D() {
	if (Math.random() < 0.5) return [...randomWalk1D(), 0];
	else return [0, ...randomWalk1D()];
}

export function randomWalk3D() {
	const rdn = Math.random();
	if (rdn < 0.333) return [...randomWalk1D(), 0, 0];
	if (rdn < 0.666) return [0, ...randomWalk1D(), 0];
	else return [0, 0, ...randomWalk1D()];
}
