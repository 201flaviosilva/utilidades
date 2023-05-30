import * as Arrays from "./Arrays/index.js";
import * as DataStructures from "./DataStructures/index.js";
import * as Maths from "./Maths/index.js";
import * as Physics from "./Physics/index.js";

import { EventSystem, EventSystemInstance } from "./EventSystem.js";
import { Fibonacci, fibonacciCustomSequence, fibonacciSequence, fibonacciUntil, recursiveFibonacci } from "./Fibonacci.js";
import { allCharactersSame } from "./allCharactersSame.js";
import { binary2Decimal } from "./binary2Decimal.js";
import { choiceTrend } from "./choiceTrend.js";
import { clone } from "./clone.js";
import { compare2Objects } from "./compare2Objects.js";
import { MEGABYTE_IN_KILOBYTES } from "./constants.js";
import { decimal2Binary } from "./decimal2Binary.js";
import { getDate } from "./getDate.js"; // getTime, getMilliseconds, getSeconds, getMinutes, getHours, getDay, getWeekDay, getWeek, getMonth, getYear, getDateFormatted 
import { getVersion } from "./getVersion.js";
import { isObjectEmpty } from "./isObjectEmpty.js";
import { isFalsy, isTruthy } from "./isTruthyFalsy.js";
import { and, or, xor } from "./logicalOperators.js";
import { randomColor, randomColor0X, randomRGBAColor, randomRGBColor } from "./randomColor.js";
import { randomFloat, randomInt, randomNumber } from "./randomNumber.js";
import { randomString } from "./randomString.js";
import { randomWalk } from "./randomWalk.js";
import { reverseString } from "./reverseString.js";

export {
	Arrays,
	DataStructures,
	Maths,
	Physics,

	// Class
	EventSystem, EventSystemInstance,
	Fibonacci, fibonacciSequence, fibonacciUntil, fibonacciCustomSequence, recursiveFibonacci,

	// Constants
	MEGABYTE_IN_KILOBYTES,

	// Functions
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
	and, or, xor,
	randomColor, randomColor0X, randomRGBColor, randomRGBAColor,
	randomNumber, randomInt, randomFloat,
	randomString,
	randomWalk,
	reverseString,
};

