/**
 * Checks if a value is empty.
 *
 * @param {any} value - The value to check.
 * @return {boolean} True if the value is empty, false otherwise.
 */
function isEmpty(value) {
	if (Array.isArray(value)) {
		if (value.length === 0 || value.every((item) => item === "")) return true;
	}
	return (
		value === undefined ||
		value === "" ||
		value == null ||
		(typeof value === "object" && Object.keys(value).length === 0)
	);
}
function apply() {
	let input = document.getElementById("input").value;
	console.log(formatArray(input));
}

/**
 * Formats an array by removing empty elements, trimming each element, and converting it to an array of strings.
 *
 * @param {string} input - The input array to be formatted.
 * @return {string[]} - The formatted array of strings.
 */
function formatArray(input) {
	if (isEmpty(input)) return "";

	if (Array.isArray(input) && typeof input[0] === "string") {
		return input;
	} else {
		return input
			.toString()
			.replace(/[\[\]"]/g, "")
			.split(",")
			.filter((element) => !isEmpty(element))
			.map((element) => element.trim());
	}
}
