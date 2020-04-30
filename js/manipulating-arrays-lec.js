"use strict";
console.log("Let's manipulate some arrays");
/* ***************************************************************
* 						MANIPULATING ARRAYS
*************************************************************** */

//JavaScript has several methods we can use to manipulate arrays.
//We will be covering some of the most commonly used array methods.

/* ***************************************************************
* 						ADDING ELEMENTS
*************************************************************** */
// .push adds elements to the end of an array
// .unshift adds elements to the beginning of an array
// modifies the original array
// these methods return the new length of an array

var numStrings = ['three','four','five','six','seven'];

// TO DO TOGETHER: Use the .push method to add the next String in the sequence.
numStrings.push("eight");

// TO DO TOGETHER: Use the .unshift method to add 'two' before 'three'.
numStrings.unshift("two");


// TO DO: Use the .push method to add 'nine' and 'ten'.

numStrings.push("nine", "ten");
console.log(numStrings);

// TO DO: Use .unshift to add 'zero' and 'one'. Can this be done with one statement?
numStrings.unshift("zero", "one");
console.log(numStrings);
// Console log your results.

/* ***************************************************************
* 						REMOVING ELEMENTS
*************************************************************** */
// .pop removes elements to the end of an array
// .shift removes elements to the beginning of an array
// modifies the original array
// these methods return the element you are removing

var activeCohorts = ['deimos','europa','fortuna','ganymede','ada','bayes'];

// TO DO TOGETHER: Use the .pop method to remove the last cohort in the list.
console.log(activeCohorts.pop());
console.log(activeCohorts);

// TO DO TOGETHER: Use the .shift method to remove the first cohort in the list.
console.log(activeCohorts.shift());
console.log(activeCohorts);

// What do we get when we log the return of these methods?

// TO DO: Use a combination of .pop and .shift methods until only 'fortuna' and 'ganymede' are
// left in the array. Log the updated array.
activeCohorts.pop();
activeCohorts.shift();
console.log(activeCohorts);


/* ***************************************************************
* 					LOCATING ARRAY ELEMENTS
*************************************************************** */
// .indexOf starts at beginning of array and returns the first matching element
// .lastIndexOf starts at end of array and returns the last matching element

var fruit = ['apples','oranges','grapes','bananas','apples','oranges','grapes'];

// TO DO TOGETHER: Find the first index of 'apples' in the array
console.log(fruit.indexOf("apples"));

// TO DO TOGETHER: Find the last index of 'apples' in the array
console.log(fruit.lastIndexOf("apples"));

// TO DO: If the last element in the fruits array is 'grapes', remove it from the list.
if (fruit.lastIndexOf("grapes") === fruit.length - 1) {
	fruit.pop();
}

// Console log your new array.
console.log(fruit);

/* ***************************************************************
* 							SLICING
*************************************************************** */
// .slice allows us to copy a portion of an array
// takes in two arguments
// does NOT modify the original array; returns a new one

var instructors = ['justin','david','sophie','vivian','casey','trant','daniel'];

// TO DO TOGETHER: Create a variable named ganymedeInstructors that stores an array list of
// 'justin','david', and 'sophie'. Do this with the .slice method.
var ganymedeInstructors = instructors.slice(0, 3);
console.log(ganymedeInstructors);

// TO DO TOGETHER: Create a variable named fortunaInstructors that stores an array list of all
// instructors starting from 'vivian' onward.
var fortunaInstructors = instructors.slice(3);
console.log(fortunaInstructors);

/* ***************************************************************
* 							REVERSING
*************************************************************** */
// reverses an array
// modifies original array
// returns the reverse array

// TO DO TOGETHER: Take the instructors array and reverse it.
// What will the following console log display?
instructors.reverse();
console.log(instructors);

/* ***************************************************************
* 							SORTING
*************************************************************** */
// converse elements to string equivalents
// sorts based on those values
// modifies original array
// returns the sorted array

var myString = [5,6,"one",1,2,"3","4"];
console.log(myString.sort());

// TO DO TOGETHER: Sort the instructors array.
instructors.sort();
// Take a look at the results of the console log.
console.log(instructors);

/* ***************************************************************
* 				CONVERTING BETWEEN STRINGS AND ARRAYS
*************************************************************** */
// .split turns strings to an array
// pass in a delimiter to tell it where the split occurs
// .join turns an array into a string
// pass in a delimiter to tell it what to separate elements with

var submarine = "We all live in a yellow submarine.";

// TO DO TOGETHER: Split this string up into an array of elements
var submaringArray = submarine.split(" ");

// What will this console log display?
console.log(submarine);
console.log(submaringArray);

// TO DO: Now, join the array elements into a string. Each word should be in its own separate line.
var newString = submaringArray.join("\n");
// Log your results.
console.log(newString);