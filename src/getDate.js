/**
 * Returns the date
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getDate() // {
		time: 1653573577063,
		milliseconds: 134,
		seconds: 24,
		minutes: 24,
		hours: 15,
		day: 31,
		weekDay: 7,
		week: 50,
		month: 5,
		year: 2022,
		dateFormatted: "1/1/2021",
	}
 * 
 * @returns {Object}
 */
export function getDate() {
	return {
		time: getTime(),
		milliseconds: getMilliseconds(),
		seconds: getSeconds(),
		minutes: getMinutes(),
		hours: getHours(),
		day: getDay(),
		weekDay: getWeekDay(),
		week: getWeek(),
		month: getMonth(),
		year: getYear(),
		dateFormatted: getDateFormatted(),
	}
}

/**
 * Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getTime() // 1653573577063
 * 
 * @returns {number}
 */
export function getTime() { return new Date().getTime(); }

/**
 * Returns the current milliseconds (from 0-999)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getMilliseconds() // 134
 * getMilliseconds() // 952
 * 
 * @returns {number} current milliseconds
 */
export function getMilliseconds() { return new Date().getMilliseconds(); }

/**
 * Returns the current seconds (from 0-59)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getSeconds() // 0
 * getSeconds() // 24
 * 
 * @returns {number} current seconds
 */
export function getSeconds() { return new Date().getSeconds(); }

/**
 * Returns the current minutes (from 0-59)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getMinutes() // 0
 * getMinutes() // 24
 * 
 * @returns {number} current minutes
 */
export function getMinutes() { return new Date().getMinutes(); }

/**
 * Returns the current hour (from 0-23)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getHours() // 4
 * getHours() // 23
 * 
 * @returns {number} current hours
 */
export function getHours() { return new Date().getHours(); }

/**
 * Returns the day of the month (from 1-31)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getDay() // 1
 * getDay() // 23
 * getDay() // 31
 * 
 * @returns {number} current day
 */
export function getDay() { return new Date().getDate(); }

/**
 * Returns the current day of the week (from 1-7)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getWeekDay() // 1
 * getWeekDay() // 5
 * getWeekDay() // 7
 * 
 * @returns {number} current day of the week
 */
export function getWeekDay() { return new Date().getDay() + 1; }

/**
 * Returns the current week in the year
 * 
 * @example
 * getWeek() // 21
 * getWeek() // 50
 * 
 * @returns {number} current week in the year
 */
export function getWeek() {
	const currentDate = new Date();
	const startDate = new Date(currentDate.getFullYear(), 0, 1);
	const days = Math.floor((currentDate - startDate) /
		(24 * 60 * 60 * 1000));

	return Math.ceil(days / 7);
}

/**
 * Returns the month (from 1-12)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getDay() // 1
 * getDay() // 6
 * getDay() // 12
 * 
 * @returns {number} current month
 */
export function getMonth() { return new Date().getMonth() + 1; }

/**
 * Returns the year
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getDay() // 1970
 * getDay() // 2000
 * getDay() // 2042
 * 
 * @returns {number} current year
 */
export function getYear() { return new Date().getFullYear(); }

/**
 * Return a string with a formatted date in Day-Month-Year system
 * 
 * @example
 * getDateFormatted() // "1/1/2021"
 * getDateFormatted() // "26/5/2022"
 * getDateFormatted() // "25/12/2042"
 * 
 * @returns {string}
 */
export function getDateFormatted() { return getDay() + "/" + getMonth() + "/" + getYear(); }
