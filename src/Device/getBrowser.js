/**
 * Detects and returns the browser name
 * 
 * Function based in ➜ {@link https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser}
 * 
 * @example getBrowser(); // Opera
 * @example getBrowser(); // Chrome
 * @example getBrowser(); // Safari
 * @example getBrowser(); // Firefox
 * @example getBrowser(); // IE
 * @example getBrowser(); // Unknown // Not detect
 * 
 * @returns {String} browser name
 * 
 * @function getBrowser
 * @memberof Device
 */
export function getBrowser() {
	if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) return "Opera";
	else if (navigator.userAgent.indexOf("Chrome") != -1) return "Chrome";
	else if (navigator.userAgent.indexOf("Safari") != -1) return "Safari";
	else if (navigator.userAgent.indexOf("Firefox") != -1) return "Firefox";
	else if (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) return "IE";
	else return "Unknown"; // IF IE > 10
}
