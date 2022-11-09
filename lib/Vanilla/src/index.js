import * as Array from "./Array/index.js";
import * as Maths from "./Maths/index.js";
import * as Physics from "./Physics/index.js";
import * as SortingAlgorithms from "./SortingAlgorithms/index.js";

import { allCharactersSame } from "./allCharactersSame.js";
import { binary2Decimal } from "./binary2Decimal.js";
import { BinarySearchTree, BinarySearchTreeInstance } from "./BinarySearchTree.js";
import { choiceTrend } from "./choiceTrend.js";
import { clone } from "./clone.js";
import { compare2Objects } from "./compare2Objects.js";
import { decimal2Binary } from "./decimal2Binary.js";
import { getDate } from "./getDate.js"; // getTime, getMilliseconds, getSeconds, getMinutes, getHours, getDay, getWeekDay, getWeek, getMonth, getYear, getDateFormatted 
import { EventSystem, EventSystemInstance } from "./EventSystem.js";
import { Fibonacci, fibonacciSequence, fibonacciUntil, fibonacciCustomSequence, recursiveFibonacci } from "./Fibonacci.js";
import { getVersion } from "./getVersion.js";
import { isObjectEmpty } from "./isObjectEmpty.js";
import { isFalsy, isTruthy } from "./isTruthyFalsy.js";
import { and, or, xor } from "./logicalOperators.js";
import { randomColor, randomColor0X, randomRGBColor, randomRGBAColor } from "./randomColor.js";
import { randomNumber, randomInt, randomFloat } from "./randomNumber.js";
import { randomString } from "./randomString.js";
import { randomWalk1D, randomWalk2D, randomWalk3D } from "./randomWalk.js";
import { reverseString } from "./reverseString.js";
import { Vector2 } from "./Vector2.js";

export {
	Array,
	Maths,
	Physics,
	SortingAlgorithms,

	BinarySearchTree, BinarySearchTreeInstance,
	EventSystem, EventSystemInstance,
	Fibonacci, fibonacciSequence, fibonacciUntil, fibonacciCustomSequence, recursiveFibonacci,
	Vector2,

	allCharactersSame,
	binary2Decimal,
	compare2Objects,
	decimal2Binary,
	choiceTrend,
	clone,
	getDate,
	getVersion,
	isObjectEmpty,
	isFalsy, isTruthy,
	and, or, xor, // logicalOperators
	randomColor, randomColor0X, randomRGBColor, randomRGBAColor,
	randomNumber, randomInt, randomFloat,
	randomString,
	randomWalk1D, randomWalk2D, randomWalk3D,
	reverseString,
};
