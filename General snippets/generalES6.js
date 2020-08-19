//strings methods
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

let calcAge = function (year) {
	return 2020 - year;
};

const n = `${firstName} ${lastName} `;
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes('S'));
console.log(`${firstName} `.repeat(5));
