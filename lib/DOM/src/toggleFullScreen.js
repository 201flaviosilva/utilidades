/**
 * - If a given element is not in full screen, starts the full-screen mode and focus on the element.
 * - If the document is already in full screen mode, stop.
 * 
 * @example toggleFullScreen();
 * @example toggleFullScreen(document.getElementById("myElement"));
 * @example
 * ```html
 * <!--- html --->
 * <button id="toggle">Toggle</button>
 * ```
 * 
 * ```js
 * // js
 * import { toggleFullScreen } from "201flaviosilva-utils";
 * document.getElementById("toggle").addEventListener("click", () => {
 * 	toggleFullScreen(document.getElementById("toggle"));
 * });
 * ```
 * 
 * @param {HTMLElement} element - the DOM element to put in full screen
 * @returns {void}
 * 
 * @function toggleFullScreen
 * @memberof DOM
 */
export function toggleFullScreen(element = document.documentElement) {
	if (!document.fullscreenElement) element.requestFullscreen();
	else if (document.exitFullscreen) document.exitFullscreen();
}
