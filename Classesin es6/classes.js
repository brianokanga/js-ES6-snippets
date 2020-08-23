// CLASSES

//es5 functional constructor
var Person5 = function (name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person5.prototype.calculateAge = function () {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
};

var john5 = new Person5('john', 1990, 'teacher');

//ES6 classes
class Person6 {
	constructor(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	calculateAge() {
		let age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);
	}

	//used as helper functions but not inheritable by instances of the class
	static greeting() {
		console.log('Hey there');
	}
}

const john6 = new Person6('Eliza', 1994, 'Dev');

//static method inheritable by instances of the class hence called
Person6.greeting();
