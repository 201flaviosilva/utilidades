const defaultStyle = {
	minWidth: "80%",
	position: "fixed",
	top: "-50px",
	left: "50%",
	zIndex: 1000,
	transform: "translate(-50%, 0)",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "4px 10px",
	border: "2px solid #000000",
	borderRadius: "4px",
	backgroundColor: "#f0f0f0",
	boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.75)",
};

const textDefaultStyle = {};

const buttonDefaultStyle = {
	padding: "2px 6px",
	borderRadius: "4px",
	background: "none",
};

// Check: https://developer.mozilla.org/docs/Web/API/Element/animate (Experimental)

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
export function notification({
	text = "",
	animated = true,
	animationTime = 2,
	closeButton = true,
	endPosition = 100,
	style = defaultStyle,
	textStyle = textDefaultStyle,
	buttonStyle = buttonDefaultStyle,
	parent = document.body,
}) {
	style = { ...defaultStyle, ...style };
	textStyle = { ...textDefaultStyle, ...textStyle };
	buttonStyle = { ...buttonDefaultStyle, ...buttonStyle };
	let numOfTransitions = 0;
	const _endPosition = endPosition + "px";

	// Pop Up
	const popUp = document.createElement("div");
	Object.assign(popUp.style, { ...style });
	if (animated) popUp.style.transition = animationTime + "s";
	else popUp.style.top = _endPosition;

	// Span
	const popUpSpan = document.createElement("span");
	Object.assign(popUpSpan.style, { ...textStyle });
	popUpSpan.innerHTML = text;
	popUp.appendChild(popUpSpan);

	// Close Button
	if (closeButton) {
		const popUpButton = document.createElement("button");
		Object.assign(popUpButton.style, { ...buttonStyle });
		popUpButton.innerHTML = "X";
		popUpButton.addEventListener("click", () => parent.removeChild(popUp));
		popUp.appendChild(popUpButton);
	}

	// Animation
	if (animated) {
		// Events
		// popUp.addEventListener("transitionstart", () => { console.log("Transition - Start"); });
		popUp.addEventListener("transitionend", () => {
			numOfTransitions++;
			if (numOfTransitions >= 2) parent.removeChild(popUp);
		});

		// Timers
		setTimeout(() => { popUp.style.top = _endPosition; }, 10);
		setTimeout(() => { popUp.style.top = "-100px"; }, (animationTime + 1) * 1000);
	} else {
		setTimeout(() => { parent.removeChild(popUp); }, (animationTime + 1) * 1000);
	}

	// Add element
	parent.appendChild(popUp);
}
