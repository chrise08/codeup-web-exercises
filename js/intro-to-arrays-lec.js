"use strict";
console.log("Welcome to intro to arrays");

var arr1 = [1,2,3,4,5];

console.log(arr1[0]);
console.log(arr1.length); // returns 5

console.log(arr1.length - 1); // always return last element in an array
var arrLength = arr1.length;
console.log(arrLength);

console.log(arr1[5]); // this returns undefined b/c only 4 indices

var arr2 = ["a","b","c"];
var arr3 = [6, "d", 7,"e"];

var arr4 = [[1,2,3,4,5], ["a","b","c"], [6, "d", 7,"e"]]; // or [arr1, arr2, arr3]

console.log(arr4[1][2]); // returns "c"

// Iterating Over Arrays

var colors = ["red","orange","yellow","green","blue","violet"];

// Starts at index 0
for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

// Starts at last element index
for (var i = (colors.length - 1); i >= 0; i--) {
	console.log(colors[i]);
}

// This forEach loop iterates over all the array elements
// 1. call the forEach method on the array
// 2. forEach takes in a function parameter
// 3. this function has 3 available parameters (element, index, array)
colors.forEach(function (color, index, array) {
	console.log(color, index);
});

/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`

var pies = [];
console.log(pies);

//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`

var pies = ["apple", "cherry", "key lime", "huckleberry"];
console.log(pies);


// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable

var shapes = ['square', 'rectangle', 'circle', 'triangle'];
console.log(shapes);

// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable

var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
console.log(instructors);


// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable

var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
console.log(daysOfTheWeek);


// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable

var favoritesFoods = ["pizza", "ice cream", "pie", "tacos", "hamburgers"];
console.log(favoritesFoods);


/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array

console.log(shapes.length);

// TODO: console.log the length of the instructors array

console.log(instructors.length);

// TODO: console.log the length of the daysOfTheWeek array

console.log(daysOfTheWeek.length);

// TODO: console.log the length of the favoriteFoods array

console.log(favoritesFoods.length);



/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
// 	console.log(shapes[0]);
// 	console.log(shapes[1]);
// 	console.log(shapes[2]);
// 	console.log(shapes[3]);
// 	console.log(shapes[4]);

// TODO: console.log each element of the instructors array
// console.log(instructors[0]);
// console.log(instructors[1]);
// console.log(instructors[2]);
// console.log(instructors[3]);
// console.log(instructors[4]);
// console.log(instructors[5]);
// console.log(instructors[6]);

// TODO: console.log the first three elements of the daysOfTheWeek array
// console.log(daysOfTheWeek[0]);
// console.log(daysOfTheWeek[1]);
// console.log(daysOfTheWeek[2]);
// console.log(daysOfTheWeek[3]);
// console.log(daysOfTheWeek[4]);
// console.log(daysOfTheWeek[5]);
// console.log(daysOfTheWeek[6]);

// TODO: console.log the first three elements of the favoriteFoods array
// console.log(favoritesFoods[0]);
// console.log(favoritesFoods[1]);
// console.log(favoritesFoods[2]);
// console.log(favoritesFoods[3]);
// console.log(favoritesFoods[4]);


// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array
function returnLastElement(arr) {
	return arr[arr.length - 1];
}

console.log(returnLastElement(shapes));


/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array
console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);

// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape
for (var i = 0; i < shapes.length; i++) {
	console.log(shapes[i]);
	if (shapes[i] === "circle") {
		alert("That's my favorite shape!")
		break;
	}
}

// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.
// See above

// TODO: What happens if we change var i = 1? or var i = 2;
// Would skip over square
// TODO: What are benefits of using loops to iterate?
// Gives us control
// TODO: How does the loop know when to stop iterating?
// When reaching the last element

// TODO: Using a for loop, iterate through the instructors array and console.log each instructor
for (var i = 0; i < instructors.length; i++) {
	console.log(instructors[i]);
}

// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week
for (var i = 0; i < daysOfTheWeek.length; i++) {
	console.log(daysOfTheWeek[i]);
}

// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food
for (var i = 0; i < favoritesFoods.length; i++) {
	console.log(favoritesFoods[i]);
}

// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor.
//  If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"
for (var i = 0; i < instructors.length; i++) {
	console.log(instructors[i]);
	if (instructors[i] === "david" || instructors[i] === "justin" || instructors[i] === "sophie") {
		alert("Hey, I know " + instructors[i]);
	} else {
		alert("I haven't had class with " + instructors[i]);
	}
}


/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array
shapes.forEach(function (shape) {
	console.log(shape);
})

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
var pies = ["apple", "cherry", "key lime", "huckleberry"];

pies.forEach(function (pie) {
	console.log(pie);
})

// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor
instructors.forEach(function (instructor) {
	console.log(instructor);
})

// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week
daysOfTheWeek.forEach(function (day) {
	console.log(day);
})

// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food
favoritesFoods.forEach(function (food) {
	console.log(food);
})

