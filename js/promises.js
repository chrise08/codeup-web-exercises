"use strict";

$(document).ready(function () {
	
	const getUsername = username => {
		
		const githubAPI = fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${PROMISES_LEC_EXERCISES}`}});
		
		githubAPI.then(response => response.json())
		         .then(events => console.log(new Date(events[0].created_at).toDateString()));
		
	};
	getUsername('chrise08');
});




