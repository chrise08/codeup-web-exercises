"use strict";

const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

const moreThanThreeLanguages = arr => arr.filter(user => user.languages.length >= 3);

console.log(moreThanThreeLanguages(users));

const userEmail = arr => arr.map(user => user.email);

console.log(userEmail(users));

const totalYrsExperience = arr => arr.reduce((totalYears, user) => totalYears + user.yearsOfExperience, 0);

const avgYrsExperience = totalYrsExperience(users) / users.length;

console.log(totalYrsExperience(users));
console.log(avgYrsExperience);

const longestEmail = arr => arr.reduce((longest, user) => {
	if (user.email.length > longest.length) {
		return user.email;
	} else {
		return longest;
	}
}, '');

console.log(longestEmail(users));

const yourInstructors = arr => arr.reduce((finalString, user, index) => {
	if (index < arr.length - 1) {
		return `${finalString}${user.name}, `;
	} else {
		return `${finalString}${user.name}.`
	}
}, 'Your instructors are: ');

console.log(yourInstructors(users));

// Bonus

let uniqueLangs = users.reduce((langList, user) => {
	for (let lang of user.languages) {
		if (!langList.includes(lang)) {
			langList.push(lang);
		}
	}
	return langList;
}, []);

console.log(uniqueLangs);