import { clamp } from "./Maths/clamp.js";

/**
 * Updates a position, rotation and speed of a car in the top down view
 * 
 * Algorithm based in {@link https://www.youtube.com/watch?v=Rs_rAxEsAvI}
 * @see {@link https://www.youtube.com/watch?v=Rs_rAxEsAvI}
 * 
 * @see example -> {@link https://codesandbox.io/s/top-down-car-movimentation-sobjn0?file=/src/index.js}
 * 
 * @param {Object} state - the current state of the car
 * @param {Object} state.keys - the objet with the input keys
 * @param {boolean} [state.keys.forward=false] true if the forward key is pressed
 * @param {boolean} [state.keys.left=false] true if the left key is pressed
 * @param {boolean} [state.keys.right=false] true if the right key is pressed
 * @param {boolean} [state.keys.reverse=false] true if the reverse key is pressed
 * @param {number} state.x - current x position of the car
 * @param {number} state.y - current y position of the car
 * @param {number} state.speed - current car speed
 * @param {number} state.acceleration - acceleration value per update
 * @param {number} [state.maxSpeed=Infinity] - the limit speed of the car
 * @param {number} [state.friction=0] - friction of the car (0 to 1)
 * @param {number} state.rotation - current car rotation
 * @param {number} state.rotationSpeed - car rotation speed
 * @param {Object} state.bounds - limits the maximum position on the axes
 * @param {Object} state.bounds.x - limits the maximum position in the x axis
 * @param {number} [state.bounds.x.min=-Infinity] - minimum limit on the x axis
 * @param {number} [state.bounds.x.max=Infinity] - max limit on the x axis
 * @param {Object} state.bounds.y - limits the maximum position in the y axis
 * @param {number} [state.bounds.y.min=-Infinity] - minimum limit on the y axis
 * @param {number} [state.bounds.y.max=Infinity] - max limit on the y axis
 * @returns {Object}
 */
export function topDownCarMovimentation({
	keys = { forward: false, left: false, right: false, reverse: false },
	x, y,
	speed,
	acceleration,
	maxSpeed = Infinity,
	friction = 0,
	rotation,
	rotationSpeed,
	bounds = {
		x: { min: -Infinity, max: Infinity },
		y: { min: -Infinity, max: Infinity },
	}
}) {
	// Add Speed
	if (keys.forward) speed += acceleration;
	else if (keys.reverse) speed -= acceleration;

	// Limit Speed
	const reverseForce = Number(keys.reverse) + 1; // if the forward and reverse are pressed at the same time
	if (speed > maxSpeed) speed = maxSpeed / reverseForce;
	else if (speed < -maxSpeed / 2) speed = -maxSpeed / 2;

	// Friction
	if (speed > 0) speed -= friction;
	else if (speed < 0) speed += friction;
	if (Math.abs(speed) < friction) speed = 0; // if the speed is less than the friction, set it to 0

	// Rotation
	if (speed) {
		const flip = speed > 0 ? 1 : -1; // Check if the forward or reverse
		if (keys.left) rotation -= rotationSpeed * flip;
		if (keys.right) rotation += rotationSpeed * flip;
	}

	// Update position
	const newX = x + Math.sin(rotation) * speed;
	const newY = y - Math.cos(rotation) * speed;

	// Check if the car is out of bounds and return values
	return {
		x: clamp(newX, bounds.x.min, bounds.x.max),
		y: clamp(newY, bounds.y.min, bounds.y.max),
		speed,
		rotation,
	}
}
