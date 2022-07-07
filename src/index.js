import * as DOM from "./DOM/index.js";

import { allCharactersSame } from "./allCharactersSame.js";
import { allEqual } from "./allEqual.js";
import { and } from "./and.js";
import { arrayChoice } from "./arrayChoice.js";
import { arrayMoveLeft } from "./arrayMoveLeft.js";
import { arrayMoveRight } from "./arrayMoveRight.js";
import { average } from "./average.js";
import { binary2Decimal } from "./binary2Decimal.js";
import { stringToCamelCase, camelCaseToNormal } from "./camelCase.js";
import { stringToCapitalize, capitalizeToNormal } from "./capitalizeCase.js";
import { clamp } from "./clamp.js";
import { compare2Objects } from "./compare2Objects.js";
import { decimal2Binary } from "./decimal2Binary.js";
import { degreesToRadians } from "./degreesToRadians.js";
import { division } from "./division.js";
import { EventSystem, EventSystemInstance } from "./EventSystem.js";
import { exportFile } from "./exportFile.js";
import { Fibonacci, fibonacciSequence, fibonacciUntil, fibonacciCustomSequence, recursiveFibonacci } from "./Fibonacci.js";
import { FIFO } from "./FIFO.js";
import { findBigArrObj } from "./findBigArrObj.js";
import { findLowArrObj } from "./findLowArrObj.js";
import { getTime, getMilliseconds, getSeconds, getMinutes, getHours, getDay, getWeekDay, getWeek, getMonth, getYear, getDateFormatted } from "./getDate.js";
import { getMaxArrayObjects } from "./getMaxArrayObjects.js";
import { getMinArrayObjects } from "./getMinArrayObjects.js";
import { getUrlParameter } from "./getUrlParameter.js";
import { getVersion } from "./getVersion.js";
import { invertedLerp } from "./invertedLerp.js";
import { invertSentence, invertWords } from "./invertText.js";
import { isEven } from "./isEven.js";
import { isMultipleOf } from "./isMultipleOf.js";
import { isNarcissisticNumber } from "./isNarcissisticNumber.js";
import { isOdd } from "./isOdd.js";
import { stringToKebabCase, kebabCaseToNormal } from "./kebabCase.js";
import { lerp } from "./lerp.js";
import { LIFO } from "./LIFO.js";
import { makeNegative } from "./makeNegative.js";
import { map } from "./map.js";
import { multiplication } from "./multiplication.js";
import { nand } from "./nand.js";
import { nor } from "./nor.js";
import { not } from "./not.js";
import { or } from "./or.js";
import { radiansToDegrees } from "./radiansToDegrees.js";
import { randomColor } from "./randomColor.js";
import { randomColor0X } from "./randomColor0X.js";
import { randomFloat } from "./randomFloat.js";
import { randomInt } from "./randomInt.js";
import { randomNumber } from "./randomNumber.js";
import { randomRGBAColor } from "./randomRGBAColor.js";
import { randomRGBColor } from "./randomRGBColor.js";
import { randomString } from "./randomString.js";
import { range } from "./range.js";
import { rockPaperScissor } from "./rockPaperScissor.js";
import { stringToScreamingSnakeCase, screamingSnakeCaseToNormal } from "./screamingSnakeCase.js";
import { stringToSnakeCase, snakeCaseToNormal } from "./snakeCase.js";
import { sortAscending } from "./sortAscending.js";
import { sortAscendingObj } from "./sortAscendingObj.js";
import { subtraction } from "./subtraction.js";
import { sum } from "./sum.js";
import { sortDescending } from "./sortDescending.js";
import { sortDescendingObj } from "./sortDescendingObj.js";
import { topDownCarMovimentation } from "./topDownCarMovimentation.js";
import { xnor } from "./xnor.js";
import { xor } from "./xor.js";

export {
	DOM,
	allCharactersSame,
	allEqual,
	and,
	arrayChoice,
	arrayMoveLeft,
	arrayMoveRight,
	average,
	binary2Decimal,
	stringToCamelCase, camelCaseToNormal,
	stringToCapitalize, capitalizeToNormal,
	clamp,
	compare2Objects,
	decimal2Binary,
	degreesToRadians,
	division,
	EventSystem, EventSystemInstance,
	exportFile,
	Fibonacci, fibonacciSequence, fibonacciUntil, fibonacciCustomSequence, recursiveFibonacci,
	FIFO,
	findBigArrObj,
	findLowArrObj,
	getTime, getMilliseconds, getSeconds, getMinutes, getHours, getDay, getWeekDay, getWeek, getMonth, getYear, getDateFormatted,
	getMaxArrayObjects,
	getMinArrayObjects,
	getUrlParameter,
	getVersion,
	invertedLerp,
	invertSentence, invertWords,
	isEven,
	isMultipleOf,
	isNarcissisticNumber,
	isOdd,
	stringToKebabCase, kebabCaseToNormal,
	lerp,
	LIFO,
	makeNegative,
	map,
	multiplication,
	nand,
	nor,
	not,
	or,
	radiansToDegrees,
	randomColor,
	randomColor0X,
	randomFloat,
	randomInt,
	randomNumber,
	randomRGBAColor,
	randomRGBColor,
	randomString,
	range,
	rockPaperScissor,
	stringToScreamingSnakeCase, screamingSnakeCaseToNormal,
	stringToSnakeCase, snakeCaseToNormal,
	sortAscending,
	sortAscendingObj,
	subtraction,
	sum,
	sortDescending,
	sortDescendingObj,
	topDownCarMovimentation,
	xnor,
	xor
};
