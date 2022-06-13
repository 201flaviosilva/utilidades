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
	constructor(x = 0, y = x) {
		this.x = Number(x);
		this.y = Number(y);
	}

	/**
	 * Set x and y components of an existing Vector2.
	 * 
	 * @example new Vector2(1, 2).set(3, 4); // (3, 4)
	 * 
	 * @param {number} x - the new X value
	 * @param {number} y - the new Y value
	 * @memberof Vector2
	 */
	set(x = 0, y = x) {
		this.x = x;
		this.y = y;
	}

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
	setVector(vector) {
		this.x = vector.x;
		this.y = vector.y;
	}

	/**
	 * Return a copy of this vector.
	 * 
	 * @example new Vector2(1, 2).clone() // (1, 2)
	 * 
	 * @returns {Vector}
	 * @memberof Vector2
	 */
	clone() { return new Vector2(this.x, this.y); }

	/**
	 * Returns a new vector with the sum of this vector and the given one.
	 * 
	 * @param {Vector2} vector - the vector to add
	 * @returns {Vector2}
	 * @memberof Vector2
	 */
	add(vector) { return new Vector2(this.x + vector.x, this.y + vector.y); }

	/**
	 * Returns a new vector with the subtraction of this vector and the given one.
	 * 
	 * @param {Vector2} vector - the vector to subtract
	 * @returns {Vector2}
	 * @memberof Vector2
	 */
	subtract(vector) { return new Vector2(this.x - vector.x, this.y - vector.y); }

	/**
	 * Returns a new vector with the multiplication of this vector and the given one.
	 * 
	 * @param {Vector2} vector - the vector to multiply/scale
	 * @returns {Vector2}
	 * @memberof Vector2
	 */
	scale(scalar) { return new Vector2(this.x * scalar, this.y * scalar); }

	/**
	 * Dot Product of two vectors.
	 * 
	 * @param {Vector2} vector 
	 * @returns {number}
	 * @memberof Vector2
	 */
	dot(vector) { return (this.x * vector.x + this.y + vector.y); }

	/**
	 * Linearly interpolates between vectors A and B by t. t = 0 returns A, t = 1 returns B
	 * 
	 * @param {Vector2} vector - the vector to interpolate
	 * @param {number} t - time
	 * @returns {number}
	 * @memberof Vector2
	 */
	moveTowards(vector, t) {
		t = Math.min(t, 1); // still allow negative t
		const diff = vector.subtract(this);
		return this.add(diff.scale(t));
	}

	/**
	 * Returns the length of this vector (Read Only).
	 * @returns {number}
	 * @memberof Vector2
	 */
	magnitude() { return Math.sqrt(this.magnitudeSqr()); }

	/**
	 * Returns the squared length of this vector (Read Only).
	 * 
	 * @returns {number}
	 * @memberof Vector2
	 */
	magnitudeSqr() { return (this.x * this.x + this.y * this.y); }

	/**
	 * Returns the distance between this vector and a given vector.
	 * 
	 * @param {Vector2} vector - the vector to compare
	 * @returns {number}
	 * @memberof Vector2
	 */
	distance(vector) { return Math.sqrt(this.distanceSqr(vector)); }

	/**
	 * Returns the squared distance between this vector and a given vector.
	 * 
	 * @param {Vector2} vector - the vector to compare
	 * @returns {number}
	 * @memberof Vector2
	 */
	distanceSqr(vector) {
		const deltaX = this.x - vector.x;
		const deltaY = this.y - vector.y;
		return (deltaX * deltaX + deltaY * deltaY);
	}

	/**
	 * Returns this vector with a magnitude of 1 (Read Only).
	 * 
	 * @returns {Vector2}
	 * @memberof Vector2
	 */
	normalize() {
		const mag = this.magnitude();
		const vector = this.clone();
		if (Math.abs(mag) < 1e-9) {
			vector.x = 0;
			vector.y = 0;
		} else {
			vector.x /= mag;
			vector.y /= mag;
		}
		return vector;
	}

	/**
	 * Gets the unsigned angle in degrees between from and to.
	 * 
	 * @returns {number}
	 * @memberof Vector2
	 */
	angle() { return Math.atan2(this.y, this.x); }

	/**
	 * Return a new vector rotated
	 * 
	 * @param {number} alpha 
	 * @returns {Vector2}
	 */
	rotate(alpha) {
		const cos = Math.cos(alpha);
		const sin = Math.sin(alpha);
		const vector = new Vector2();
		vector.x = this.x * cos - this.y * sin;
		vector.y = this.x * sin + this.y * cos;
		return vector;
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
	toPrecision(precision) {
		const vector = this.clone();
		vector.x = Number(vector.x.toFixed(precision));
		vector.y = Number(vector.y.toFixed(precision));
		return vector;
	}

	/**
	 * Returns true if the given vector is exactly equal to this vector.
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
	toString() {
		const vector = this.toPrecision(1);
		return ("[" + vector.x + "; " + vector.y + "]");
	}

	/**
	 * Return a new vector with absolute values
	 * 
	 * @example new Vector2(-1, 5).invert() // (1, 5)
	 * 
	 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs}
	 * @returns {Vector2}
	 * @memberof Vector2
	 */
	absolute() { return new Vector2(Math.abs(this.x), Math.abs(this.y)); }

	/**
	 * Return a new vector with the X and Y values inverted
	 * 
	 * @example new Vector2(-1, 5).invert() // (5, -1)
	 * 
	 * @returns {Vector2}
	 * @memberof Vector2
	 */
	invert() { return new Vector2(this.y, this.x); }

	/**
	 * Shorthand for writing Vector2(0, 0).
	 * @returns {Vector2}
	 * @memberof Vector2
	 */
	static zero() { return new Vector2(0); }

	/**
	 * Shorthand for writing Vector2(1, 1).
	 * @returns {Vector2}
	 * @memberof Vector2
	 */
	static one() { return new Vector2(1); }

	/**
		* Shorthand for writing Vector2(Infinity, Infinity).
		* @returns {Vector2}
		* @memberof Vector2
		*/
	static positiveInfinity() { return new Vector2(Infinity); }

	/**
		* Shorthand for writing Vector2(-Infinity, -Infinity).
		* @returns {Vector2}
		* @memberof Vector2
		*/
	static negativeInfinity() { return new Vector2(-Infinity); }

	/**
		* Shorthand for writing Vector2(0, 1).
		* @returns {Vector2}
		* @memberof Vector2
		*/
	static up() { return new Vector2(0, 1); }

	/**
		* Shorthand for writing Vector2(0, -1).
		* @returns {Vector2}
		* @memberof Vector2
		*/
	static down() { return new Vector2(0, -1); }

	/**
		* Shorthand for writing Vector2(-1, 0).
		* @returns {Vector2}
		* @memberof Vector2
		*/
	static left() { return new Vector2(-1, 0); }

	/**
		* Shorthand for writing Vector2(1, 0).
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
