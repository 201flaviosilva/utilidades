/**
 * Create a file and auto downloads the file to user computer
 * 
 * @param {any} data - the content to export
 * @param {string} filename - the name of the exported file
 * @param {string} type - type of the exported file like "txt"
 * @returns {void}
 * @memberof DOM
 */
export function exportFile(data, filename, type) {
	const file = new Blob([data], { type: type });
	if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, filename);
	else {
		const a = document.createElement("a"),
			url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(() => {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);
		}, 0);
	}
}
