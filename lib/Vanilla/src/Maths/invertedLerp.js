import { clamp } from "./clamp.js";

/**
 * Determines where a value lies between two points.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.InverseLerp.html}
 * 
 * @example
 * invertedLerp(-10, 0, 10); // 0
 * invertedLerp(0, 0, 10); // 0
 * invertedLerp(5, 0, 10); // 0.5
 * invertedLerp(10, 0, 10); // 1
 * invertedLerp(100, 0, 10); // 1
 * 
 * @param {number} value - The point within the range you want to calculate.
 * @param {number} start - The start of the range.
 * @param {number} end - The end of the range.
 * @returns {number} value between 0 and 1, representing where the "value" parameter falls within the range defined by start and end
 * 
 * @function invertedLerp
 * @memberof Maths
 */
export function invertedLerp(value, start, end) { return clamp((value - start) / (end - start)); }
