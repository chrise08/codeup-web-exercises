"use strict";

$(document).ready(function () {
	
	const getUsername = username => {
		
		const githubAPI = fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${PROMISES_LEC_EXERCISES}`}});
		
		githubAPI.then(response => response.json())
		         .then(events => console.log(new Date(events[0].created_at).toDateString()));
		
	};
	getUsername('chrise08');
	
	const wait = num => {
		return new Promise ((resolve, reject) => {
			setTimeout(() => {
				if (typeof num === "number") {
					resolve(`You\'ll see this after ${num} milliseconds`)
				} else {
					reject("You didn't enter a valid number of milliseconds")
				}
			}, num);
		});
	};
	
	const promise = wait(5000);
	console.log(promise);
	promise.then(message => console.log('Promise resolved!', message));
	promise.catch(message => console.log('Promise rejected!', message));
});