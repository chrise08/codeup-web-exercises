"use strict";

// var i = 2;
//
// while (i <= 65536) {
// 	console.log(i);
// 	i *= 2;
// }

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have " + allCones + " cones to sell today.")
do {
	var conesBought = Math.floor(Math.random() * 5) + 1;
	if (conesBought < allCones) {
		console.log(conesBought + " cones sold...");
	} else if (conesBought > allCones) {
		console.log("Cannot sell you " + conesBought + " cones I only have " + allCones);
	} else {
		console.log("Yay! I sold them all!")
	}
	allCones = allCones - conesBought;
} while (allCones > 0);