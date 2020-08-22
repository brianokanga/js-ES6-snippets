//strings methods
// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// let calcAge = function (year) {
// 	return 2020 - year;
// };

// const n = `${firstName} ${lastName} `;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('h'));
// console.log(n.includes('S'));
// console.log(`${firstName} `.repeat(5));

//Destructuring
let john = ['John', 26];
// let name = john[0];
// let age = john[1];

//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

//Destructuring objects
const obj = {
	firstName: 'John',
	lastName: 'Smith',
};

const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

//alternative B
const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

console.log('=========rest parametors==========');

//rest parametors
//ES5
function isFullAge5(limit) {
	var argsArr = Array.prototype.slice.call(arguments, 1);
	argsArr.forEach(function (cur) {
		console.log(2020 - cur >= limit);
	});
}

isFullAge5(21, 1992, 2009, 1998, 2008);

console.log('=========ES6 SPREAD OPERATOR==========');

// ES6
//the spread operator converts the years to an array
function isFullAge6(limit, ...years) {
	years.forEach(cur => console.log(2020 - cur >= limit));
}
isFullAge6(21, 1992, 2009, 1998, 2008);
