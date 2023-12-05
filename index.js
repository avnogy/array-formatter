/**
 * Initializes the window.onload event handler to format and display an array.
 *
 * @param {HTMLElement} input - The input element that contains the array.
 * @param {HTMLElement} result - The result element where the formatted array will be displayed.
 * @return {void}
 */
window.onload = function () {
	const input = document.getElementById("input");
	const result = document.getElementById("result");

	const formatAndDisplayArray = () => {
		if (input && result) {
			result.innerHTML = JSON.stringify(formatArray(input.value));
		}
	};

	if (input) {
		input.addEventListener("input", formatAndDisplayArray);
		input.addEventListener("change", formatAndDisplayArray);
		input.addEventListener("blur", formatAndDisplayArray);
	}

	// Toggle dark mode
	const toggleBtn = document.getElementById("toggle-btn");
	const body = document.body;

	toggleBtn.addEventListener("click", () => {
		body.classList.toggle("dark-theme");
		toggleBtn.innerHTML = body.classList.contains("dark-theme")
			? "light"
			: "dark";
	});

	result.addEventListener("click", () => {
		navigator.clipboard.writeText(result.innerText);
	});
};

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

/**
 * Formats an array by removing empty elements and trimming whitespace.
 *
 * @param {Array|string} input - The input array or string to be formatted.
 * @return {Array} - The formatted array.
 */
function formatArray(input) {
	if (isEmpty(input)) return [];

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
