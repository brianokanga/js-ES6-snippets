// CLASSES  & SUBCLASSES
//INHERITANCE

//es5 verssion using functional constructor
//Super class
var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function () {
  var age = new Date ().getFullYear () - this.yearOfBirth;
  console.log (age);
};

//subclass
var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
  Person5.call (this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
};

//inheritance in classes
//object.create allows us to set prototype of an object
//we want the prototype of athlete to be the protype of Person so that they become connected
Athlete5.prototype = Object.create (Person5.prototype);

//prototype on sub class
Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log (this.medals);
};

var johnAthlete5 = new Athlete5 ('Jphn', 1990, 'Swimmer', 3, 10);

johnAthlete5.calculateAge ();
johnAthlete5.wonMedal ();

console.log ('=========ES6 VERSION===========');

//ES6 VERSION
//ES6 inheritance using classes

//super class(main class)
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge () {
    let age = new Date ().getFullYear () - this.yearOfBirth;
    console.log (age);
  }

  //used as helper functions but not inheritable by instances of the class
  static greeting () {
    console.log ('Hey there');
  }
}

class Athlete6 extends Person6 {
  constructor (name, yearOfBirth, job, olympicGames, medals) {
    super (name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal () {
    this.medals++;
    console.log (this.medals);
  }
}

const elizaAthlete6 = new Athlete6 ('Eliza', 1994, 'Swimmer', 5, 13);

elizaAthlete6.calculateAge ();
elizaAthlete6.wonMedal ();
