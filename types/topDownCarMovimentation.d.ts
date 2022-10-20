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
