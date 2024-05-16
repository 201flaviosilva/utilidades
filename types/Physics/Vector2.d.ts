/**
 * @class
 * @classdesc
 * Constructs a new vector with given x, y components.
 * Code adapted from {@link https://gist.github.com/Dalimil/3daf2a0c531d7d030deb37a7bfeff454}
 * @see {@link https://gist.github.com/Dalimil/3daf2a0c531d7d030deb37a7bfeff454}
 * @see {@link https://github.com/photonstorm/phaser/blob/v3.51.0/src/math/Vector2.js}
 * @see {@link https://docs.unity3d.com/ScriptReference/Vector2.html}
 *
 * @param {number|object} [x=0] - the x value
 * @param {number} [y=x] y - the y value
 *
 * @example new Vector2(56, 78); // (56, 78)
 * @example Vector2.zero(); // (0,0)
 *
 * @property {number} [x=0] - The x value
 * @property {number} [y=x] - The y value
 *
 * @constructor
 */
export class Vector2 {
    /**
     * Shorthand for writing Vector2(0, 0).
     *
     * @example Vector2.zero()
     *
     * @returns {Vector2}
     * @memberof Vector2
     */
    static zero(): Vector2;
    /**
     * Shorthand for writing Vector2(1, 1).
     *		*
        * 	 * @example Vector2.zero()
        *
     * @returns {Vector2}
     * @memberof Vector2
     */
    static one(): Vector2;
    /**
        * Shorthand for writing Vector2(Infinity, Infinity).
        *
        * @example Vector2.zero()
        *
        * @returns {Vector2}
        * @memberof Vector2
        */
    static positiveInfinity(): Vector2;
    /**
        * Shorthand for writing Vector2(-Infinity, -Infinity).
        *
        * @example Vector2.zero()
        *
        * @returns {Vector2}
        * @memberof Vector2
        */
    static negativeInfinity(): Vector2;
    /**
        * Shorthand for writing Vector2(0, -1).
        *
        * @example Vector2.zero()
        *
        * @returns {Vector2}
        * @memberof Vector2
        */
    static up(): Vector2;
    /**
        * Shorthand for writing Vector2(0, 1).
        *
        * @example Vector2.zero()
        *
        * @returns {Vector2}
        * @memberof Vector2
        */
    static down(): Vector2;
    /**
        * Shorthand for writing Vector2(-1, 0).
        *
        * @example Vector2.zero()
        *
        * @returns {Vector2}
        * @memberof Vector2
        */
    static left(): Vector2;
    /**
        * Shorthand for writing Vector2(1, 0).
        *
        * @example Vector2.zero()
        *
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
     * @example new Vector2(1, 2).set({5.-10}); // (5, -10)
     * @example new Vector2(1, 2).set(new Vector2(-100, 55)); // (-100, 5)
     *
     * @param {number|Vector2} [x=0] - the new X value
     * @param {number} [y=x] - the new Y value
     * @return {Vector2} This Vector2
     * @memberof Vector2
     */
    set(x?: number | Vector2, y?: number): Vector2;
    /**
     * Return a new Vector2 with the same values of this
     *
     * @example new Vector2(1, 2).clone() // (1, 2)
     *
     * @returns {Vector2}
     * @memberof Vector2
     */
    clone(): Vector2;
    /**
     * Add the values of this vector 2 with the values of the given vector2
     *
     * @example new Vector2(1,2).add(new Vector2(10)); // (11, 12)
     *
     * @param {Vector2} vector - the vector to add
     * @returns {Vector2} This Vector2
     * @memberof Vector2
     */
    add(vector: Vector2): Vector2;
    /**
     * Subtracts the values of vector 2 with the values of the given vector2
     *
     * Normally used to get the distance between two vectors.
     *
     * @example new Vector2(1,2).subtract(new Vector2(10)); // (-9, -8)
     * @example new Vector2(0).distanceVector(new Vector2(10, 5)); // (10, 5)
     * @example new Vector2(5, 10).distanceVector(new Vector2(10, 5)); // (5, -5)
     *
     * @param {Vector2} vector - the vector to subtract
     * @returns {Vector2} This Vector2
     * @memberof Vector2
     */
    subtract(vector: Vector2): Vector2;
    /**
     * Multiplies the values of vector 2 with the given value.
     *
     * @example new Vector2(1,2).scale(2); // (2, 3)
     *
     * @param {number} [value=1] value - the value to multiply/scale
     * @returns {Vector2} This Vector2
     * @memberof Vector2
     */
    scale(value?: number): Vector2;
    /**
     * Multiplies the values of vector 2 with the values of the given vector2
     *
     * @example new Vector2(1,2).multiply(new Vector2(10)); // (10, 20)
     *
     * @param {Vector2} vector2 - the vector to multiply
     * @return {Vector2} This Vector2
     */
    multiply(vector2: Vector2): Vector2;
    /**
     * Divides the values of vector 2 with the values of the given vector2
     *
     * @example new Vector2(10,5).divide(new Vector2(5)); // (5, 2.5)
     *
     * @param {Vector2} vector2 - the vector to divide
     * @return {Vector2} This Vector2
     */
    divide(vector2: Vector2): Vector2;
    /**
     * Dot product of two vectors.
     *
     * @example new Vector2(10,5).dot(new Vector2(5)); // 75
     *
     * @param {Vector2} vector
     * @returns {number}
     * @memberof Vector2
     */
    dot(vector: Vector2): number;
    /**
     * Linearly interpolates between current vector and the given vector by time.
     *
     * @example new Vector2(5,10).moveTowards(); // (0,0)
     * @example new Vector2(5,10).moveTowards(new Vector2(5, 10)); // (5,10)
     * @example new Vector2(5,10).moveTowards(new Vector2(5, 10), 0.5); // (7.5, 7.5)
     *
     * @param {Vector2} target - the vector to interpolate
     * @param {number} step - step, distance of the target (between 0, and 1)
     * @returns {Vector2} this vector changed
     * @memberof Vector2
     */
    moveTowards(target?: Vector2, step?: number): Vector2;
    /**
     * Returns the length of this vector.
     *
     * @example new Vector2(0).magnitude(); // 0
     * @example new Vector2(1).magnitude(); // 2
     * @example new Vector2(2).magnitude(); // 8
     * @example new Vector2(5, 10).magnitude(); // 125
     *
     * @returns {number}
     * @memberof Vector2
     */
    magnitude(): number;
    /**
     * Returns the squared length of this vector.
     *
     * @example new Vector2(0).magnitude(); // 0
     * @example new Vector2(1).magnitude(); // 1.4142135623730951
     * @example new Vector2(2).magnitude(); // 2.8284271247461903
     * @example new Vector2(5, 10).magnitude(); // 11.180339887498949
     *
     * @returns {number}
     * @memberof Vector2
     */
    magnitudeSqr(): number;
    /**
     * Returns the distance between this vector and a given vector.
     *
     * @example new Vector2(5, 10).distance(); // 125
     * @example new Vector2(5, 10).distance(new Vector2(100, 20))); // 9125
     *
     * @param {Vector2} vector - the vector to compare
     * @returns {number}
     * @memberof Vector2
     */
    distance(vector?: Vector2): number;
    /**
     * Returns the squared distance between this vector and a given vector.
     *
     * @example new Vector2(5, 10).distanceSqrt(); // 11.180339887498949
     * @example new Vector2(5, 10).distanceSqrt(new Vector2(100, 20)); // 95.524865872714
     * @example Vector2.zero().distanceSqrt(new Vector2(100, 20)); // 101.9803902718557
     *
     * @param {Vector2} vector - the vector to compare
     * @returns {number}
     * @memberof Vector2
     */
    distanceSqrt(vector: Vector2): number;
    /**
     * Returns this vector with a magnitude of 1.
     *
     * @example new Vector2(5, 10).normalize()); // (0.4472135954999579, 0.8944271909999159)
     * @example new Vector2(1000, 123).normalize()); // (0.9925202644900105, 0.1220799925322713)
     * @example Vector2.zero().normalize()); // (0, 0)
     *
     * @returns {Vector2} this vector normalized
     * @memberof Vector2
     */
    normalize(): Vector2;
    /**
     * Calculate the angle between this Vector and the given Vector.
     *
     * @example new Vector2(5, 10).diferenceAngle(new Vector2(5, 10)); // 0
     * @example new Vector2(1000, 123).diferenceAngle(new Vector2(5, 10)); // -173.52080244507272
     * @example Vector2.zero().diferenceAngle(new Vector2(90, 90)); // 45
     *
     * @param {Vector2} target - the vector to get the angle
     * @returns {number}
     * @memberof Vector2
     */
    diferenceAngle(target: Vector2): number;
    /**
     * Calculate the angle between this Vector and the positive x-axis.
     *
     * @see {@link https://github.com/photonstorm/phaser/blob/v3.51.0/src/math/Vector2.js#L215}
     *
     * @returns {number} the result
     * @memberof Vector2
     */
    angle(): number;
    /**
     * Return a new vector rotated
     *
     * @param {number} [radians=0] the radians to rotate
     * @returns {Vector2}
     */
    rotate(radians?: number): Vector2;
    /**
     * Fix the precision to the given decimal places
     *
     * @example new Vector2(1.234, 5.123456).toPrecision(2) // (1.23, 5.12)
     *
     * @param {number} precision - the number of decimal places
     * @returns {Vector2}
     * @memberof Vector2
     */
    toPrecision(precision?: number): Vector2;
    /**
     * Returns true if the given vector is exactly equal to this vector.
     *
     * @example new Vector2(5, 10).equals(new Vector2(5, 10)); // true
     * @example new Vector2(10, 5).equals(new Vector2(5, 10)) // false
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
     * Change the values to absolute values
     *
     * @example new Vector2(-1, 5).absolute() // (1, 5)
     *
     * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs}
     * @returns {Vector2} this Vector2 updated
     * @memberof Vector2
     */
    absolute(): Vector2;
    /**
     * Change the values to negative values
     *
     * @example new Vector2(-1, 5).negative() // (-1, -5)
     *
     * @returns {Vector2} This Vector2.
     * @memberof Vector2
     */
    negative(): Vector2;
    /**
     * Negate the `x` and `y` components of this Vector.
     *
     * @example new Vector2(-1, 5).negate() // (1, 5)
     *
     * @return {Vector2} this Vector2
     * @memberof Vector2
     */
    negate(): Vector2;
    /**
     * Invert the X and Y values of this Vector2
     *
     * @example new Vector2(-1, 5).invert() // (5, -1)
     *
     * @returns {Vector2} This Vector2.
     * @memberof Vector2
     */
    invert(): Vector2;
}
