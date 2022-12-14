/**
 * Display a pop up im the DOM with the given text
 *
 * Example: {@link https://codesandbox.io/s/201flaviosilva-utils-notification-g3nk0v}
 *
 * @example notification({ text: "notification" });
 * @example
 * notification({
 * 	text: "My nice text",
 * 	animated: false,
 * 	animationTime: 5,
 * 	closeButton: true,
 * 	endPosition: 250,
 * 	style: { border: "10px solid rgb(0, 255, 100)", },
 * 	textStyle: { textTransform: "uppercase", },
 * 	buttonStyle: { backgroundColor: "red" },
 * });
 *
 * @param {Object} options - The options for the pop up
 * @param {string} options.text - display text in the pop up
 * @param {boolean} options.animated - if the animation should be animated
 * @param {number} options.animationTime - time for the animation
 * @param {boolean} options.closeButton - if the pop up have the button to close or not
 * @param {number} options.endPosition - position to stop the animation (top)
 * @param {Object} options.style - the style for the wrapper
 * @param {Object} options.textStyle - the style for the text (span)
 * @param {Object} options.buttonStyle - the style for the close button
 * @param {HTMLElement} options.parent - parent to create the pop up
 * @returns {void}
 *
 * @function notification
 * @memberof DOM
 */
export function notification({ text, animated, animationTime, closeButton, endPosition, style, textStyle, buttonStyle, parent, }: {
    text: string;
    animated: boolean;
    animationTime: number;
    closeButton: boolean;
    endPosition: number;
    style: any;
    textStyle: any;
    buttonStyle: any;
    parent: HTMLElement;
}): void;
