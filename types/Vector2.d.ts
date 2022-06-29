/**
 * @class Vector2
 * @classdesc
 * Constructs a new vector with given x, y components.
 * Code adapted from {@link https://gist.github.com/Dalimil/3daf2a0c531d7d030deb37a7bfeff454}
 * @see {@link https://gist.github.com/Dalimil/3daf2a0c531d7d030deb37a7bfeff454}
 * @see {@link https://docs.unity3d.com/ScriptReference/Vector2.html}
 *
 * @param {number} x - the x value
 * @param {number} y - the x value
 *
 * @example new Vector2(56, 78);
 * @example Vector2.zero();
 *
 * @constructor
 */
export class Vector2 {
    /**
     * Shorthand for writing Vector2(0, 0).
     * @returns {Vector2}
     * @memberof Vector2
     */
    static zero(): Vector2;
    /**
     * Shorthand for writing Vector2(1, 1).
     * @returns {Vector2}
     * @memberof Vector2
     */
    static one(): Vector2;
    /**
        * Shorthand for writing Vector2(Infinity, Infinity).
        * @returns {Vector2}
        * @memberof Vector2
        */
    static positiveInfinity(): Vector2;
    /**
        * Shorthand for writing Vector2(-Infinity, -Infinity).
        * @returns {Vector2}
        * @memberof Vector2
        */
    static negativeInfinity(): Vector2;
    /**
        * Shorthand for writing Vector2(0, 1).
        * @returns {Vector2}
        * @memberof Vector2
        */
    static up(): Vector2;
    /**
        * Shorthand for writing Vector2(0, -1).
        * @returns {Vector2}
        * @memberof Vector2
        */
    static down(): Vector2;
    /**
        * Shorthand for writing Vector2(-1, 0).
        * @returns {Vector2}
        * @memberof Vector2
        */
    static left(): Vector2;
    /**
        * Shorthand for writing Vector2(1, 0).
        * @returns {Vector2}
        * @memberof Vector2
        */
    static right(): Vector2;
    /**
     * Creates a random vector with random normalized values
     *
     * @returns {Vector2}
     */
    static random(): Vector2;
    constructor(x?: number, y?: number);
    x: number;
    y: number;
    /**
     * Set x and y components of an existing Vector2.
     *
     * @example new Vector2(1, 2).set(3, 4); // (3, 4)
     *
     * @param {number} x - the new X value
     * @param {number} y - the new Y value
     * @memberof Vector2
     */
    set(x?: number, y?: number): void;
    /**
     * Update this vector based on the given one
     *
     * @example new Vector2(1, 2).set(new Vector2(3, 4)); // (3, 4)
     * @example
     * const myVector = new Vector2(1, 2);
     * myVector.setVector(myVector.add(new Vector2(5))); // (6, 7)
     *
     * @param {Vector2} vector - the vector to update this one
     * @memberof Vector2
     */
    setVector(vector: Vector2): void;
    /**
     * Return a copy of this vector.
     *
     * @example new Vector2(1, 2).clone() // (1, 2)
     *
     * @returns {Vector}
     * @memberof Vector2
     */
    clone(): Vector;
    /**
     * Returns a new vector with the sum of this vector and the given one.
     *
     * @param {Vector2} vector - the vector to add
     * @returns {Vector2}
     * @memberof Vector2
     */
    add(vector: Vector2): Vector2;
    /**
     * Returns a new vector with the subtraction of this vector and the given one.
     *
     * @param {Vector2} vector - the vector to subtract
     * @returns {Vector2}
     * @memberof Vector2
     */
    subtract(vector: Vector2): Vector2;
    /**
     * Returns a new vector with the multiplication of this vector and the given one.
     *
     * @param {Vector2} vector - the vector to multiply/scale
     * @returns {Vector2}
     * @memberof Vector2
     */
    scale(scalar: any): Vector2;
    /**
     * Dot Product of two vectors.
     *
     * @param {Vector2} vector
     * @returns {number}
     * @memberof Vector2
     */
    dot(vector: Vector2): number;
    /**
     * Linearly interpolates between vectors A and B by t. t = 0 returns A, t = 1 returns B
     *
     * @param {Vector2} vector - the vector to interpolate
     * @param {number} t - time
     * @returns {number}
     * @memberof Vector2
     */
    moveTowards(vector: Vector2, t: number): number;
    /**
     * Returns the length of this vector (Read Only).
     * @returns {number}
     * @memberof Vector2
     */
    magnitude(): number;
    /**
     * Returns the squared length of this vector (Read Only).
     *
     * @returns {number}
     * @memberof Vector2
     */
    magnitudeSqr(): number;
    /**
     * Returns the distance between this vector and a given vector.
     *
     * @param {Vector2} vector - the vector to compare
     * @returns {number}
     * @memberof Vector2
     */
    distance(vector: Vector2): number;
    /**
     * Returns the squared distance between this vector and a given vector.
     *
     * @param {Vector2} vector - the vector to compare
     * @returns {number}
     * @memberof Vector2
     */
    distanceSqr(vector: Vector2): number;
    /**
     * Returns this vector with a magnitude of 1 (Read Only).
     *
     * @returns {Vector2}
     * @memberof Vector2
     */
    normalize(): Vector2;
    /**
     * Gets the unsigned angle in degrees between from and to.
     *
     * @returns {number}
     * @memberof Vector2
     */
    angle(): number;
    /**
     * Return a new vector rotated
     *
     * @param {number} alpha
     * @returns {Vector2}
     */
    rotate(alpha: number): Vector2;
    /**
     * Fix the precision to the given decimal places
     *
     * @example new Vector2(1.234, 5.123456).toPrecision(2) // (1.23, 5.12)
     *
     * @param {number} precision - the number of decimal places
     * @returns {Vector2}
     * @memberof Vector2
     */
    toPrecision(precision: number): Vector2;
    /**
     * Returns true if the given vector is exactly equal to this vector.
     *
     * @param {Vector2} vector - the vector to compare
     * @returns {boolean}
     * @memberof Vector2
     */
    equals(vector: Vector2): boolean;
    /**
     * Returns a formatted string for this vector.
     *
     * @returns {string}
     * @memberof Vector2
     */
    toString(): string;
    /**
     * Return a new vector with absolute values
     *
     * @example new Vector2(-1, 5).invert() // (1, 5)
     *
     * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs}
     * @returns {Vector2}
     * @memberof Vector2
     */
    absolute(): Vector2;
    /**
     * Return a new vector with the X and Y values inverted
     *
     * @example new Vector2(-1, 5).invert() // (5, -1)
     *
     * @returns {Vector2}
     * @memberof Vector2
     */
    invert(): Vector2;
}
