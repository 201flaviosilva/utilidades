import * as Array from "./Array/index.mjs";
// import * as DOM from "./DOM/index.mjs";
import * as Maths from "./Maths/index.mjs";
// import * as SortingAlgorithms from "./SortingAlgorithms/index.mjs";

import { allCharactersSame } from "./allCharactersSame.mjs";
import { binary2Decimal } from "./binary2Decimal.mjs";
import { BinarySearchTree, BinarySearchTreeInstance } from "./BinarySearchTree.mjs";
import { stringToCamelCase, camelCaseToNormal } from "./camelCase.mjs";
import { stringToCapitalize, capitalizeToNormal } from "./capitalizeCase.mjs";
import { choiceTrend } from "./choiceTrend.mjs";
import { clone } from "./clone.mjs";
import { compare2Objects } from "./compare2Objects.mjs";
import { decimal2Binary } from "./decimal2Binary.mjs";
import { getDate } from "./getDate.mjs"; // getTime, getMilliseconds, getSeconds, getMinutes, getHours, getDay, getWeekDay, getWeek, getMonth, getYear, getDateFormatted 
import { EventSystem, EventSystemInstance } from "./EventSystem.mjs";
import { Fibonacci, fibonacciSequence, fibonacciUntil, fibonacciCustomSequence, recursiveFibonacci } from "./Fibonacci.mjs";
import { FIFO } from "./FIFO.mjs";
// import { getUrlParameter } from "./getUrlParameter.mjs";
// import { getVersion } from "./getVersion.mjs";
import { invertSentence, invertWords } from "./invertText.mjs";
import { isFalsy, isTruthy } from "./isTruthyFalsy.mjs";
import { stringToKebabCase, kebabCaseToNormal } from "./kebabCase.mjs";
import { and, or, xor } from "./logicalOperators.mjs";
import { LIFO } from "./LIFO.mjs";
import { randomColor, randomColor0X, randomRGBColor, randomRGBAColor } from "./randomColor.mjs";
import { randomNumber, randomInt, randomFloat } from "./randomNumber.mjs";
import { randomString } from "./randomString.mjs";
import { randomWalk1D, randomWalk2D, randomWalk3D } from "./randomWalk.mjs";
import { stringToScreamingSnakeCase, screamingSnakeCaseToNormal } from "./screamingSnakeCase.mjs";
import { stringToSnakeCase, snakeCaseToNormal } from "./snakeCase.mjs";
import { topDownCarMovimentation } from "./topDownCarMovimentation.mjs";
import { Vector2 } from "./Vector2.mjs";

export {
	Array,
	// DOM,
	Maths,
	// SortingAlgorithms,

	BinarySearchTree, BinarySearchTreeInstance,
	EventSystem, EventSystemInstance,
	Fibonacci, fibonacciSequence, fibonacciUntil, fibonacciCustomSequence, recursiveFibonacci,
	FIFO,
	LIFO,
	Vector2,

	allCharactersSame,
	binary2Decimal,
	stringToCamelCase, camelCaseToNormal,
	stringToCapitalize, capitalizeToNormal,
	choiceTrend,
	clone,
	compare2Objects,
	decimal2Binary,
	getDate,
	// getUrlParameter,
	// getVersion,
	invertSentence, invertWords,
	isFalsy, isTruthy,
	stringToKebabCase, kebabCaseToNormal,
	and, or, xor, // logicalOperators
	randomColor, randomColor0X, randomRGBColor, randomRGBAColor,
	randomNumber, randomInt, randomFloat,
	randomString,
	randomWalk1D, randomWalk2D, randomWalk3D,
	stringToScreamingSnakeCase, screamingSnakeCaseToNormal,
	stringToSnakeCase, snakeCaseToNormal,
	topDownCarMovimentation,
};
