 function findLetters(binary_lookup, userChoice) {
	if (userChoice in binary_lookup) {
		alert(binary_lookup[userChoice]);
	}
	else {
		alert("None");
	}
}

 var binary_lookup = {
	"01000001": ["A"],
	"01000010": ["B"],
	"01000011": "C",
	"01000100": "D",
	"01000101": "E",
	"01000110": "F",
	"01000111": "G",
	"01001000": "H",
	"01001001": "I",
	"01001010": "J",
	"01001011": "K",
	"01001100": "L",
	"01001101": "M",
	"01001110": "N",
	"01001111": "O",
	"01010000": "P",
	"01010001": "Q",
	"01010010": "R",
	"01010011": "S",
	"01010100": "T",
	"01010101": "U",
	"01010110": "V",
	"01010111": "W",
	"01011000": "X",
	"01011001": "Y",
	"01011010": "Z",
	"00100000": " ",
}

var userChoice = prompt("Please enter a binary number: ");


