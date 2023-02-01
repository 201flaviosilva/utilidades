/**
 * Returns the most repeated element in an array
 * 
 * @example 
 * mode([1, 2, 2, 3, 4]); // 2
 * mode(["apple", "banana", "banana", "cherry"]); // "banana"
 * 
 * @param  {Array} args - the elements to get the mode
 * @returns {*}
 * 
 * @function mode
 * @memberof Maths
 */
export function mode(...args) {
	if (args.length === 1) return args[0];

	const mode = {};
	let max = args[0];
	let count = 0;

	for (let i = 0; i < args.length; i++) {
		const el = args[i];

		if (mode[el]) mode[el]++;
		else mode[el] = 1;

		if (count < mode[el]) {
			max = el;
			count = mode[el];
		}
	}

	return max;
}
