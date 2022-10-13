import * as DOM from "./DOM/index.js";
import * as Games from "./Games/index.js";
import * as SortingAlgorithms from "./SortingAlgorithms/index.js";

import { allCharactersSame } from "./allCharactersSame.js";
import { and } from "./and.js";
import { arrayAllEqual } from "./arrayAllEqual.js";
import { arrayChoice } from "./arrayChoice.js";
import { arrayFindBigObject } from "./arrayFindBigObject.js";
import { arrayFindLowObject } from "./arrayFindLowObject.js";
import { arrayIsSorted } from "./arrayIsSorted.js";
import { arrayMoveLeft, arrayMoveRight } from "./arrayMove.js";
import { arrayShuffle } from "./arrayShuffle.js";
import { arraySortAscending } from "./arraySortAscending.js";
import { arraySortAscendingObject } from "./arraySortAscendingObject.js";
import { arraySortDescending } from "./arraySortDescending.js";
import { arraySortDescendingObject } from "./arraySortDescendingObject.js";
import { average } from "./average.js";
import { binary2Decimal } from "./binary2Decimal.js";
import { BinarySearchTree, BinarySearchTreeInstance } from "./BinarySearchTree.js";
import { stringToCamelCase, camelCaseToNormal } from "./camelCase.js";
import { stringToCapitalize, capitalizeToNormal } from "./capitalizeCase.js";
import { clamp } from "./clamp.js";
import { clone } from "./clone.js";
import { compare2Objects } from "./compare2Objects.js";
import { decimal2Binary } from "./decimal2Binary.js";
import { degreesToRadians } from "./degreesToRadians.js";
import { division } from "./division.js";
import { divideEvenly } from "./divideEvenly.js";
import { EventSystem, EventSystemInstance } from "./EventSystem.js";
import { Fibonacci, fibonacciSequence, fibonacciUntil, fibonacciCustomSequence, recursiveFibonacci } from "./Fibonacci.js";
import { FIFO } from "./FIFO.js";
import { getTime, getMilliseconds, getSeconds, getMinutes, getHours, getDay, getWeekDay, getWeek, getMonth, getYear, getDateFormatted } from "./getDate.js";
import { getPositionWithAngleDistance } from "./getPositionWithAngleDistance.js";
import { getUrlParameter } from "./getUrlParameter.js";
import { getVersion } from "./getVersion.js";
import { invertedLerp } from "./invertedLerp.js";
import { invertSentence, invertWords } from "./invertText.js";
import { isEven, isOdd } from "./isEvenOdd.js";
import { isMultipleOf } from "./isMultipleOf.js";
import { isNarcissisticNumber } from "./isNarcissisticNumber.js";
import { isFalsy, isTruthy } from "./isTruthyFalsy.js";
import { stringToKebabCase, kebabCaseToNormal } from "./kebabCase.js";
import { lerp } from "./lerp.js";
import { LIFO } from "./LIFO.js";
import { makeNegative } from "./makeNegative.js";
import { map } from "./map.js";
import { median } from "./median.js";
import { mode } from "./mode.js";
import { multiplication } from "./multiplication.js";
import { nand } from "./nand.js";
import { nor } from "./nor.js";
import { not } from "./not.js";
import { or } from "./or.js";
import { radiansToDegrees } from "./radiansToDegrees.js";
import { randomColor, randomColor0X, randomRGBColor, randomRGBAColor } from "./randomColor.js";
import { randomNumber, randomInt, randomFloat } from "./randomNumber.js";
import { randomString } from "./randomString.js";
import { randomWalk1D, randomWalk2D, randomWalk3D } from "./randomWalk.js";
import { range } from "./range.js";
import { stringToScreamingSnakeCase, screamingSnakeCaseToNormal } from "./screamingSnakeCase.js";
import { stringToSnakeCase, snakeCaseToNormal } from "./snakeCase.js";
import { subtraction } from "./subtraction.js";
import { sum } from "./sum.js";
import { toggleFullScreen } from "./toggleFullScreen.js";
import { topDownCarMovimentation } from "./topDownCarMovimentation.js";
import { Vector2 } from "./Vector2.js";
import { xnor } from "./xnor.js";
import { xor } from "./xor.js";

export {
	DOM,
	Games,
	SortingAlgorithms,

	allCharactersSame,
	and,
	arrayAllEqual,
	arrayChoice,
	arrayFindBigObject,
	arrayFindLowObject,
	arrayIsSorted,
	arrayMoveLeft, arrayMoveRight,
	arrayShuffle,
	arraySortAscending, arraySortAscendingObject,
	arraySortDescending, arraySortDescendingObject,
	average,
	binary2Decimal,
	BinarySearchTree, BinarySearchTreeInstance,
	stringToCamelCase, camelCaseToNormal,
	stringToCapitalize, capitalizeToNormal,
	clamp,
	clone,
	compare2Objects,
	decimal2Binary,
	degreesToRadians,
	division,
	divideEvenly,
	EventSystem, EventSystemInstance,
	Fibonacci, fibonacciSequence, fibonacciUntil, fibonacciCustomSequence, recursiveFibonacci,
	FIFO,
	getTime, getMilliseconds, getSeconds, getMinutes, getHours, getDay, getWeekDay, getWeek, getMonth, getYear, getDateFormatted,
	getPositionWithAngleDistance,
	getUrlParameter,
	getVersion,
	invertedLerp,
	invertSentence, invertWords,
	isEven, isOdd,
	isMultipleOf,
	isNarcissisticNumber,
	isFalsy, isTruthy,
	stringToKebabCase, kebabCaseToNormal,
	lerp,
	LIFO,
	makeNegative,
	map,
	median,
	mode,
	multiplication,
	nand,
	nor,
	not,
	or,
	radiansToDegrees,
	randomColor, randomColor0X, randomRGBColor, randomRGBAColor,
	randomNumber, randomInt, randomFloat,
	randomString,
	randomWalk1D, randomWalk2D, randomWalk3D,
	range,
	stringToScreamingSnakeCase, screamingSnakeCaseToNormal,
	stringToSnakeCase, snakeCaseToNormal,
	subtraction,
	sum,
	toggleFullScreen,
	topDownCarMovimentation,
	Vector2,
	xnor,
	xor
};
