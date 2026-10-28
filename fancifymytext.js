// CSC 193A - Fancify My Text
// Dimitry Visochin

// "Bigger!" button: makes the text in the text area 24pt.
function bigger() {
	// alert("Hello, world!");   // first test to make sure the JS was running
	document.getElementById("text").style.fontSize = "24pt";
}

// Radio buttons: FancyShmancy makes the text bold, blue and underlined.
// BoringBetty puts it back to normal.
function fancify() {
	var textArea = document.getElementById("text");

	if (document.getElementById("fancy").checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

// "Moo" button: uppercases the text and adds "-Moo" to the last word
// of each sentence (a sentence ends with a period).
function moo() {
	var textArea = document.getElementById("text");
	var parts = textArea.value.toUpperCase().split(".");

	// the last piece is whatever comes after the final period, so skip it
	for (var i = 0; i < parts.length - 1; i++) {
		if (parts[i].trim() !== "") {
			parts[i] = parts[i].replace(/\s+$/, "") + "-Moo";
		}
	}

	textArea.value = parts.join(".");
}
