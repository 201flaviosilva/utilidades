/**
 * Returns a random value -1 or 1
 *
 * @see {@link https://pt.wikipedia.org/wiki/Passeio_aleat%C3%B3rio}
 *
 * @returns {number[]}
 */
export function randomWalk1D(): number[];
/**
 * Return a changed random axis (x or y)
 *
 * @see {@link https://pt.wikipedia.org/wiki/Passeio_aleat%C3%B3rio}
 *
 * @returns {number[]}
 */
export function randomWalk2D(): number[];
/**
 * Return a changed random axis (x, y or z)
 *
 * @see {@link https://pt.wikipedia.org/wiki/Passeio_aleat%C3%B3rio}
 *
 * @returns {number[]}
 */
export function randomWalk3D(): number[];
export function randomWalk(numberOfAxes?: number, trend?: {
    left: number;
    right: number;
    up: number;
    down: number;
    front: number;
    backward: number;
}, bounds?: {
    x: {
        min: number;
        max: number;
    };
    y: {
        min: number;
        max: number;
    };
    z: {
        min: number;
        max: number;
    };
}): void;
