// Function to update the image source
function updateImageSource() {
	// Get references to the image, input, and button elements
	var image = document.getElementById("image");
	var input = document.getElementById("input");

	// Get the URL from the input field
	var imageUrl = input.value;

	// Set the src attribute of the image to the new URL
	image.src = imageUrl;
}

// Add event listener to the button
document.getElementById("button").addEventListener("click", updateImageSource);
