/**
 * Convert a number/string to a decimal
 * 
 * @example
 * binary2Decimal(101010); // 42
 * 
 * @param {number|string} binary - the number/string to be converted
 * @returns {number} - conversion decimal
 */
export default function binary2Decimal(binary) {
	if (typeof binary === "string") return parseInt(binary.split("").reverse().join(""), 2);
	else if (typeof binary === "number") return parseInt(binary, 2);
}
