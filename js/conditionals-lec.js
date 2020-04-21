"use strict";

// var x = 5;
//
// if (x === 5) {
// 	console.log("Yep, that's five!");
// }
//
// function isItANumber(parameter) {
// 	if (typeof parameter === "number") {
// 		return "Yep, that's a number!"
// 	}
// }
//
// console.log(isItANumber(7));
// console.log(isItANumber("Derek"));
// console.log(isItANumber(true));
//
// var ownsCow = false;
//
// if (ownsCow === true) {
// 	// Milk my cow for milk.
// } else {
// 	// Going to HEB for milk.
// }
//
// // Reversed
//
// if (ownsCow === false) {
// 	// Going to HEB for milk.
// } else {
// 	// Milk my cow for milk.
// }
//
// function isItANumber(parameter) {
// 	if (typeof parameter === "number") {
// 		return "Yep, that's a number."
// 	} else {
// 		return "Nope, that's not a number."
// 	}
// }
//
// console.log(isItANumber(7));
// console.log(isItANumber("Derek"));
// console.log(isItANumber(true));

// var ownsCow = false;
// var ownsGoat = false;
//
// if (ownsCow === true) {
// 	// Get my milk from my cow.
// } else if (ownsGoat === true) {
// 	// Get my milk from my goat.
// } else {
// 	// Going to HEB for milk.
// }

// function isThisThirtyFive(parameter) {
// 	if (parameter === 35) {
// 		return "Nail on head! That's thirty-five!";
// 	} else if (parameter > 35) {
// 		return "Woah, that's way bigger than thirty-five!";
// 	} else {
// 		return "Not quite. That's smaller than thirty-five!";
// 	}
// }
//
// console.log(isThisThirtyFive(34));
// console.log(isThisThirtyFive(36));
// console.log(isThisThirtyFive(35));

// var doWeHaveMilk = true;
//
// var action = (doWeHaveMilk) ? "Making a bowl of cereal." : "Going to HEB to get milk.";
//
// console.log(action);

// function isItANumber(parameter) {
// 	return = (typeof parameter === "number") ? "Yep, that's a number!" : "Nope, that's not a number!";
// }

// var color = prompt("What is your favorite color?").toLowerCase();
//
// switch (color) {
// 	case "green":
// 		alert("What a coincidence, that's my favorite!");
// 		break;
// 	case "orange":
// 		alert("That's my sister's favorite color!");
// 		break;
// 	default:
// 		alert(color + " is a weird color, my dude.");
// 		break;
// }

// var animal = "dog";
//
// switch (animal) {
// 	case "cow":
// 		console.log("Milking my cow!");
// 		break;
// 	case "goat":
// 		console.log("Milking my goat!");
// 		break;
// 	case "camel":
// 		console.log("Milking my camel!");
// 		break;
// 	default:
// 		console.log("Does CVS sell milk?");
// 		break;
// }

switch (prompt("What's your favorite sandwich meat?").toLowerCase()) {
	case "olive loaf":
		alert("A bold choice, sir/ma'am.");
		break;
	case "brisket":
		alert("Congratulations on giving the correct answer.");
		break;
	default:
		alert("That's gross, dude. No one likes that...");
		break;
}