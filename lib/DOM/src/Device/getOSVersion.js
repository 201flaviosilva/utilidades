/**
 * Detects and returns the Operating System version
 * 
 * Function based in ➜ {@link https://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-version-using-javascript}
 * 
 * @example getOSVersion(); // Mac/iOS
 * @example getOSVersion(); // Windows 10
 * @example getOSVersion(); // Windows XP
 * @example getOSVersion(); // Windows 2000
 * @example getOSVersion(); // Linux
 * 
 * @returns {String} Operating System version
 * 
 * @function getOSVersion
 * @memberof Device
 */
export function getOSVersion() {
	if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) return "Windows 10";
	else if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) return "Windows 8.1";
	else if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) return "Windows 8";
	else if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) return "Windows 7";
	else if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) return "Windows Vista";
	else if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) return "Windows XP";
	else if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) return "Windows 2000";
	else if (window.navigator.userAgent.indexOf("Mac") != -1) return "Mac/iOS";
	else if (window.navigator.userAgent.indexOf("X11") != -1) return "UNIX";
	else if (window.navigator.userAgent.indexOf("Linux") != -1) return "Linux";
	else return "Unknown";
}
