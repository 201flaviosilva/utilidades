/**
 * Detects and returns the browser version
 * 
 * Function based in ➜ {@link https://stackoverflow.com/questions/5916900/how-can-you-detect-the-version-of-a-browser}
 * 
 * @example getBrowserVersion(); // 106
 * @example getBrowserVersion(); // 105
 * 
 * @returns {Number|String} browser version
 * 
 * @function getBrowserVersion
 * @memberof Device
 */
export function getBrowserVersion() {
	const ua = navigator.userAgent;
	let tem = null;
	let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		return "IE " + (tem[1] || "");
	}

	if (M[1] === "Chrome") {
		tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
		if (tem != null) return tem.slice(1).join(" ").replace("OPR", "Opera");
	}

	M = M[2] ? [M[2]] : [navigator.appVersion, "-?"]; // M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
	if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
	return M; // return M.join(" ");
}
