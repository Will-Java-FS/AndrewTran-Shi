// Select the <p> elements by their IDs
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a5");
let a6 = document.getElementById("a6");
let a7 = document.getElementById("a7");
let a8 = document.getElementById("a8");

// Update the innerText of <p> elements with the results of the comparison functions
a1.innerText = doubleEquals(5, 6); // false
a2.innerText = doubleEquals(5, 5); // true
a3.innerText = doubleEquals(5, "5"); // true (type coercion occurs)
a4.innerText = doubleEquals("5", "5"); // true
a5.innerText = tripleEquals(5, 6); // false
a6.innerText = tripleEquals(5, 5); // true
a7.innerText = tripleEquals(5, "5"); // false (no type coercion)
a8.innerText = tripleEquals("5", "5"); // true

/**
 * Use the == operator to return the boolean result of an equality comparison for a and b
 * This operator allows type coercion.
 * @param a
 * @param b
 * @returns {boolean}
 */
function doubleEquals(a, b) {
	return a == b;
}

/**
 * Use the === operator to return the boolean result of an equality comparison for a and b
 * This operator checks for equality of both value and type (no type coercion).
 * @param a
 * @param b
 * @returns {boolean}
 */
function tripleEquals(a, b) {
	return a === b;
}
