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
 *
 * @function getDate
 * @memberof Device
 */
export function getDate(): any;
/**
 * Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getTime() // 1653573577063
 *
 * @returns {number}
 *
 * @function getTime
 * @memberof Device
 */
export function getTime(): number;
/**
 * Returns the current milliseconds (from 0-999)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getMilliseconds() // 134
 * getMilliseconds() // 952
 *
 * @returns {number} current milliseconds
 *
 * @function getMilliseconds
 * @memberof Device
 */
export function getMilliseconds(): number;
/**
 * Returns the current seconds (from 0-59)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getSeconds() // 0
 * getSeconds() // 24
 *
 * @returns {number} current seconds
 *
 * @function getSeconds
 * @memberof Device
 */
export function getSeconds(): number;
/**
 * Returns the current minutes (from 0-59)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getMinutes() // 0
 * getMinutes() // 24
 *
 * @returns {number} current minutes
 *
 * @function getMinutes
 * @memberof Device
 */
export function getMinutes(): number;
/**
 * Returns the current hour (from 0-23)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 *
 * @example
 * getHours() // 4
 * getHours() // 23
 *
 * @returns {number} current hours
 *
 * @function getHours
 * @memberof Device
 */
export function getHours(): number;
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
 *
 * @function getDay
 * @memberof Device
 */
export function getDay(): number;
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
 *
 * @function getWeekDay
 * @memberof Device
 */
export function getWeekDay(): number;
/**
 * Returns the current week in the year
 *
 * @example
 * getWeek() // 21
 * getWeek() // 50
 *
 * @returns {number} current week in the year
 *
 * @function getWeek
 * @memberof Device
 */
export function getWeek(): number;
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
 *
 * @function getMonth
 * @memberof Device
 */
export function getMonth(): number;
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
 *
 * @function getYear
 * @memberof Device
 */
export function getYear(): number;
/**
 * Return a string with a formatted date in Day-Month-Year system
 *
 * @example
 * getDateFormatted() // "1/1/2021"
 * getDateFormatted() // "26/5/2022"
 * getDateFormatted() // "25/12/2042"
 *
 * @returns {string}
 *
 * @function getDateFormatted
 * @memberof Device
 */
export function getDateFormatted(): string;
