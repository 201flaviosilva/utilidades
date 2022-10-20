/**
 * Detects and returns the Operating System name
 * 
 * Function based in ➜ {@link https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js}
 * 
 * @example getOS(); // Mac OS
 * @example getOS(); // Windows
 * @example getOS(); // iOS
 * @example getOS(); // UNIX
 * @example getOS(); // Android
 * @example getOS(); // Linux
 * @example getOS(); // Unknown // Not detect
 * 
 * @returns {String} Operating System name
 * 
 * @function getOS
 * @memberof Device
 */
export function getOS() {
	const userAgent = window.navigator.userAgent;
	const platform = window.navigator.platform;

	const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
	const iosPlatforms = ["iPhone", "iPad", "iPod"];
	const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
	const unixPlatforms = ["X11"];

	if (macosPlatforms.indexOf(platform) !== -1) return "Mac OS";
	else if (iosPlatforms.indexOf(platform) !== -1) return "iOS";
	else if (windowsPlatforms.indexOf(platform) !== -1) return "Windows";
	else if (unixPlatforms.indexOf(userAgent) != -1) return "UNIX";
	else if (/Android/.test(userAgent)) return "Android";
	else if (!os && /Linux/.test(platform)) return "Linux";
	return "Unknown";
}
