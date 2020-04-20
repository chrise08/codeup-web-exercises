"use strict";

console.log("Hello from external Javascript!");

alert("Welcome to my Website!");

var favColor = prompt("What is your favorite color?");

alert(favColor + " is my favorite color, too!");

// Exercise 3, Part 1

var costOfMoviePerDay = parseInt(prompt("How much, per day, does it cost to rent a movie?"));
var littleMermaidDays = parseInt(prompt("How many days will you rent 'The Little Mermaid'?"));
var brotherBearDays = parseInt(prompt("How many days will you rent 'Brother Bear'?"));
var herculesDays = parseInt(prompt("How many days will you rent'Hercules'?"));

var costOfMermaid = costOfMoviePerDay * littleMermaidDays;

var costOfBear = costOfMoviePerDay * brotherBearDays;

var costOfHercules = costOfMoviePerDay * herculesDays;

var totalCostOfMovies = costOfMermaid + costOfBear + costOfHercules;

alert("It costs " + totalCostOfMovies + " dollars to rent these movies.");

// Exercise 3, Part 2

var googlePerHour = parseInt(prompt("What is your daily rate of pay with Google?"));
var amazonPerHour = parseInt(prompt("What is your daily rate of pay with Amazon?"));
var facebookPerHour = parseInt(prompt("What is your daily rate of pay with Facebook?"));

var googleHoursThisWeek = parseInt(prompt("How many hours did you log with Google this week?"));
var amazonHoursThisWeek = parseInt(prompt("How many hours did you log with Amazon this week?"));
var facebookHoursThisWeek = parseInt(prompt("How many hours did you log with Facebook this week?"));

var googlePaidThisWeek = googlePerHour * googleHoursThisWeek;
var amazonPaidThisWeek = amazonPerHour * amazonHoursThisWeek;
var facebookPaidThisWeek = facebookPerHour * facebookHoursThisWeek;

var totalPaidThisWeek = googlePaidThisWeek + amazonPaidThisWeek + facebookPaidThisWeek;

alert("You made " + totalPaidThisWeek + " dollars this week!");

// Exercise 3, Part 3

var seatsAvailable = confirm("If there are still seats available for this class, click 'OK'.");
var noScheduleConflict = confirm("If your current class schedule does not have any conflicts with this class, click 'OK'.");

var canBeEnrolled = seatsAvailable && noScheduleConflict;

alert("It is " + canBeEnrolled + " that you can be enrolled in this class.");

// Exercise 3, Part 4

var itemsPurchased = parseInt(prompt("How many items did you purchase?"));
var isOfferExpired = confirm("If your offer is NOT expired, click 'OK'.");
var isPremiumMember = confirm("If you are a premium member, click 'OK'.");

var productOffer = ((itemsPurchased > 2) || isPremiumMember) && isOfferExpired;

alert("It is " + productOffer + " that the offer will be applied to your purchase.");