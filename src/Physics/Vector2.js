import { clamp } from "../Maths/clamp.js";
import { negative } from "../Maths/negative.js";
import { radiansToDegrees } from "../Maths/radiansToDegrees.js";

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
	constructor(x = 0, y = x) {
		this.x = 0;
		this.y = 0;

		this.set(x, y);
	}

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
	set(x = 0, y = x) {
		if (typeof x === "object") {
			this.x = x.x || 0;
			this.y = x.y || 0;
		} else {
			this.x = x || 0;
			this.y = y || 0;
		}

		return this;
	}

	/**
	 * Return a new Vector2 with the same values of this
	 * 
	 * @example new Vector2(1, 2).clone() // (1, 2)
	 * 
	 * @returns {Vector2}
	 * @memberof Vector2
	 */
	clone() { return new Vector2(this.x, this.y); }

	/**
	 * Add the values of this vector 2 with the values of the given vector2
	 * 
	 * @example new Vector2(1,2).add(new Vector2(10)); // (11, 12)
	 * 
	 * @param {Vector2} vector - the vector to add
	 * @returns {Vector2} This Vector2
	 * @memberof Vector2
	 */
	add(vector) {
		this.x += vector.x;
		this.y += vector.y;

		return this;
	}

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
	subtract(vector) {
		this.x -= vector.x;
		this.y -= vector.y;

		return this;
	}

	/**
	 * Multiplies the values of vector 2 with the given value.
	 * 
	 * @example new Vector2(1,2).scale(2); // (2, 3)
	 * 
	 * @param {number} [value=1] value - the value to multiply/scale
	 * @returns {Vector2} This Vector2
	 * @memberof Vector2
	 */
	scale(value = 1) {
		this.x *= value;
		this.y *= value;

		return this;
	}

	/**
	 * Multiplies the values of vector 2 with the values of the given vector2
	 * 
	 * @example new Vector2(1,2).multiply(new Vector2(10)); // (10, 20)
	 *
	 * @param {Vector2} vector2 - the vector to multiply
	 * @return {Vector2} This Vector2
	 */
	multiply(vector2) {
		this.x *= vector2.x;
		this.y *= vector2.y;

		return this;
	}

	/**
	 * Divides the values of vector 2 with the values of the given vector2
	 * 
	 * @example new Vector2(10,5).divide(new Vector2(5)); // (5, 2.5)
	 *
	 * @param {Vector2} vector2 - the vector to divide
	 * @return {Vector2} This Vector2
	 */
	divide(vector2) {
		this.x /= vector2.x;
		this.y /= vector2.y;

		return this;
	}

	/**
	 * Dot product of two vectors.
	 * 
	 * @example new Vector2(10,5).dot(new Vector2(5)); // 75
	 * 
	 * @param {Vector2} vector 
	 * @returns {number}
	 * @memberof Vector2
	 */
	dot(vector) { return (this.x * vector.x + this.y * vector.y); }

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
	moveTowards(target = Vector2.zero(), step = 1) {
		step = clamp(step, 0, 1);

		const diff = target.subtract(this);
		const diffSteep = diff.scale(step);
		return this.add(diffSteep);
	}

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
	magnitude() { return (this.x * this.x + this.y * this.y); }

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
	magnitudeSqr() { return Math.sqrt(this.magnitude()); }

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
	distance(vector = Vector2.zero()) {
		const deltaX = this.x - vector.x;
		const deltaY = this.y - vector.y;
		return (deltaX * deltaX + deltaY * deltaY);
	}

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
	distanceSqrt(vector) { return Math.sqrt(this.distance(vector)); }

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
	normalize() {
		const mag = this.distanceSqrt();

		if (Math.abs(mag) < 1e-9) {
			this.x = 0;
			this.y = 0;
		} else {
			this.x /= mag;
			this.y /= mag;
		}

		return this;
	}

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
	diferenceAngle(target) {
		return radiansToDegrees(Math.atan2(target.y - this.y, target.x - this.x));
	}

	/**
	 * Calculate the angle between this Vector and the positive x-axis.
	 * 
	 * @see {@link https://github.com/photonstorm/phaser/blob/v3.51.0/src/math/Vector2.js#L215}
	 * 
	 * @returns {number} the result
	 * @memberof Vector2
	 */
	angle() {
		let angle = Math.atan2(this.y, this.x);
		if (angle < 0) angle += 2 * Math.PI;
		return radiansToDegrees(angle);
	}

	/**
	 * Return a new vector rotated
	 * 
	 * @param {number} [radians=0] the radians to rotate
	 * @returns {Vector2}
	 */
	rotate(radians = 0) {
		const cos = Math.cos(radians);
		const sin = Math.sin(radians);
		const x = this.x * cos - this.y * sin;
		const y = this.x * sin + this.y * cos;
		return this.set(x, y);
	}

	/**
	 * Fix the precision to the given decimal places
	 * 
	 * @example new Vector2(1.234, 5.123456).toPrecision(2) // (1.23, 5.12)
	 * 
	 * @param {number} precision - the number of decimal places
	 * @returns {Vector2}
	 * @memberof Vector2
	 */
	toPrecision(precision = 1) {
		this.x = Number(this.x.toFixed(precision));
		this.y = Number(this.y.toFixed(precision));
		return this;
	}

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
	equals(vector) { return this.x === vector.x && this.y === vector.y }

	/**
	 * Returns a formatted string for this vector.
	 * 
	 * @returns {string}
	 * @memberof Vector2
	 */
	toString() { return ("[" + this.x + "; " + this.y + "]"); }

	/**
	 * Change the values to absolute values
	 * 
	 * @example new Vector2(-1, 5).absolute() // (1, 5)
	 * 
	 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs}
	 * @returns {Vector2} this Vector2 updated
	 * @memberof Vector2
	 */
	absolute() {
		this.x = Math.abs(this.x);
		this.y = Math.abs(this.y);
		return this;
	}

	/**
	 * Change the values to negative values
	 * 
	 * @example new Vector2(-1, 5).negative() // (-1, -5)
	 * 
	 * @returns {Vector2} This Vector2.
	 * @memberof Vector2
	 */
	negative() {
		this.x = negative(this.x);
		this.y = negative(this.y);
		return this;
	}

	/**
	 * Negate the `x` and `y` components of this Vector.
	 * 
	 * @example new Vector2(-1, 5).negate() // (1, 5)
	 *
	 * @return {Vector2} this Vector2
	 * @memberof Vector2
	 */
	negate() {
		this.x = this.x * -1;
		this.y = this.y * -1;

		return this;
	}

	/**
	 * Invert the X and Y values of this Vector2
	 * 
	 * @example new Vector2(-1, 5).invert() // (5, -1)
	 * 
	 * @returns {Vector2} This Vector2.
	 * @memberof Vector2
	 */
	invert() {
		const x = this.x;
		this.x = this.y;
		this.y = x;

		return this;
	}

	/**
	 * Shorthand for writing Vector2(0, 0).
	 * 
	 * @example Vector2.zero()
	 * 
	 * @returns {Vector2}
	 * @memberof Vector2
	 */
	static zero() { return new Vector2(0); }

	/**
	 * Shorthand for writing Vector2(1, 1).
	 *		* 
		* 	 * @example Vector2.zero()
		*
	 * @returns {Vector2}
	 * @memberof Vector2
	 */
	static one() { return new Vector2(1); }

	/**
		* Shorthand for writing Vector2(Infinity, Infinity).
		*
		* @example Vector2.zero()
		*
		* @returns {Vector2}
		* @memberof Vector2
		*/
	static positiveInfinity() { return new Vector2(Infinity); }

	/**
		* Shorthand for writing Vector2(-Infinity, -Infinity).
		*
		* @example Vector2.zero()
		*
		* @returns {Vector2}
		* @memberof Vector2
		*/
	static negativeInfinity() { return new Vector2(-Infinity); }

	/**
		* Shorthand for writing Vector2(0, -1).
		*
		* @example Vector2.zero()
		*
		* @returns {Vector2}
		* @memberof Vector2
		*/
	static up() { return new Vector2(0, -1); }

	/**
		* Shorthand for writing Vector2(0, 1).
		*
		* @example Vector2.zero()
		*
		* @returns {Vector2}
		* @memberof Vector2
		*/
	static down() { return new Vector2(0, 1); }

	/**
		* Shorthand for writing Vector2(-1, 0).
		*
		* @example Vector2.zero()
		*
		* @returns {Vector2}
		* @memberof Vector2
		*/
	static left() { return new Vector2(-1, 0); }

	/**
		* Shorthand for writing Vector2(1, 0).
		*
		* @example Vector2.zero()
		*
		* @returns {Vector2}
		* @memberof Vector2
		*/
	static right() { return new Vector2(1, 0); }

	/**
	 * Creates a random vector with random normalized values
	 * 
	 * @returns {Vector2}
	 */
	static random() { return new Vector2(Math.random(), Math.random()); }
}
