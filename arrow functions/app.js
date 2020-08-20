//calculate the ages of the birth years
const years = [1990, 1965, 1983, 1937];

//in es5
var ages5 = years.map(function (el) {
	return 2016 - el;
});

//in ES6
let ages6 = years.map(el => 2016 - el);

console.log(ages5);
console.log(ages6);

//where the is two arguments
ages6 = years.map((el, index) => `age element ${index + 1}: ${2016 - el}`);

console.log(ages6);

//if we have more than one line
ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `age element ${index + 1}: ${age}`;
});

console.log(ages6);

console.log('========LEXICAL THIS FOR ARROW FUNCTIONS=============');

//LEXICAL THIS FOR ARROW FUNCTIONS
//Arrow functions do not have their own this Keyword hence use the this keyword of the parent element

//lexical  "this"
//this word work
var box5 = {
	color: 'green',
	position: 1,
	// this is a regular function call hence
	clickme: function () {
		// the second function is a regular function call(callback)
		var self = this; //share the this keyword with te click me function which has access the object this
		document.querySelector('.green').addEventListener('click', function () {
			var str = `this is box number ${self.position} and it is ${self.color} `;
			alert(str);
		});
	},
};
box5.clickme();

//ES6
var box6 = {
	color: 'green',
	position: 1,
	clickme: function () {
		document.querySelector('.green').addEventListener('click', () => {
			var str = `this is box number ${this.position} and it is ${this.color} `;
			alert(str);
		});
	},
};
box6.clickme();

console.log('=================================================');

function Person(name) {
	this.name = name;
}
// ES5
Person.prototype.myFriends5 = function (friends) {
	var arr = friends.map(
		function (el) {
			return this.name + ' is friends with ' + el;
		}.bind(this)
	);

	console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark']; //this array is hoisted to the top during execution
new Person('John').myFriends5(friends);

console.log('=============ENTERING ES6 VERSION ==================');

// ES6
Person.prototype.myFriends6 = function (friends) {
	var arr = friends.map(el => `${this.name} is friends with ${el}`);
	console.log(arr);
};

new Person('Mike').myFriends6(friends);
