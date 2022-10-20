/**
 * Returns true if the current device is a mobile device
 * 
 * @example isMobile(); // false
 * @example isMobile(); // true
 * 
 * @returns {Boolean} true if is a mobile device
 * 
 * @function isMobile
 * @memberof Device
 */
export function isMobile() {
	const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
	return regex.test(navigator.userAgent);
}
