/**
 * Eliminate all child elements of a choice parent element.
 * For example: delete all dom <li> from a <ul>.
 * 
 * @param {HTMLElement} domElement - The HTML element to exclude all children
 */
export default function deleteAllChildDom(domElement) {
	while (domElement.hasChildNodes()) domElement.removeChild(domElement.firstChild);
	domElement.innerHTML = "";
}
