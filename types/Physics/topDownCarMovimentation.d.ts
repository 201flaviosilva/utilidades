/**
 * Updates the position, rotation, and speed of a car in a top-down view.
 *
 * The algorithm is based on {@link https://www.youtube.com/watch?v=Rs_rAxEsAvI}.
 *
 * @see example -> {@link https://codesandbox.io/s/top-down-car-movimentation-sobjn0}
 *
 * @param {Object} state - the current state of the car
 * @param {Object} state.keys - the object containing the input keys
 * @param {boolean} [state.keys.forward=false] - true if the forward key is pressed
 * @param {boolean} [state.keys.left=false] - true if the left key is pressed
 * @param {boolean} [state.keys.right=false] - true if the right key is pressed
 * @param {boolean} [state.keys.reverse=false] - true if the reverse key is pressed
 * @param {number} state.x - the current x position of the car
 * @param {number} state.y - the current y position of the car
 * @param {number} state.speed - the current car speed
 * @param {number} state.acceleration - the acceleration value per update
 * @param {number} [state.maxSpeed=Infinity] - the maximum speed limit of the car
 * @param {number} [state.friction=0] - the friction of the car (0 to 1)
 * @param {number} state.rotation - the current car rotation
 * @param {number} state.rotationSpeed - the car rotation speed
 * @param {Object} state.bounds - the maximum position limits on the axes
 * @param {Object} state.bounds.x - the maximum x axis position limits
 * @param {number} [state.bounds.x.min=-Infinity] - the minimum x axis limit
 * @param {number} [state.bounds.x.max=Infinity] - the maximum x axis limit
 * @param {Object} state.bounds.y - the maximum y axis position limits
 * @param {number} [state.bounds.y.min=-Infinity] - the minimum y axis limit
 * @param {number} [state.bounds.y.max=Infinity] - the maximum y axis limit
 * @returns {Object}
 *
 * @function topDownCarMovimentation
 * @memberof Physics
 */
export function topDownCarMovimentation({ keys, x, y, speed, acceleration, maxSpeed, friction, rotation, rotationSpeed, bounds }: {
    keys: {
        forward?: boolean;
        left?: boolean;
        right?: boolean;
        reverse?: boolean;
    };
    x: number;
    y: number;
    speed: number;
    acceleration: number;
    maxSpeed?: number;
    friction?: number;
    rotation: number;
    rotationSpeed: number;
    bounds: {
        x: {
            min?: number;
            max?: number;
        };
        y: {
            min?: number;
            max?: number;
        };
    };
}): any;
