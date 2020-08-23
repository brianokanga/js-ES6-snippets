//super class
class Element {
	constructor(name, yearBuilt) {
		this.name = name;
		this.yearBuilt = yearBuilt;
	}
}

//subclass
class Park extends Element {
	constructor(name, yearBuilt, area, numTrees) {
		super(name, yearBuilt);
		this.area = area; //kilometer squared
		this.numTrees = numTrees;
	}

	treeDensity() {
		const destity = this.numTrees / this.area;
		console.log(
			`${this.name} has a tree density of ${destity} tree per km Squared`
		);
	}
}

//subclass
class Street extends Element {
	constructor(name, yearBuilt, length, size = 3) {
		super(name, yearBuilt);
		this.length = length; //kilometer squared
		this.size = size;
	}

	classifyStreet() {
		const classification = new Map();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');

		console.log(
			`${this.name}, built in ${this.yearBuilt} is a  ${classification.get(
				this.size
			)} street.`
		);
	}
}

//Parks
const allParks = [
	new Park('Amboseli Park', 1934, 2.1, 493),
	new Park('Abadares Park', 1954, 2.9, 1450),
	new Park('Massai Mara park', 1917, 4.1, 3300),
];

//Streets
const allStreets = [
	new Street('Oloitoktok Street', 1996, 2.4, 4),
	new Street('Mara Street', 2001, 9.4, 5),
	new Street('Othaya Street', 2017, 3.3),
	new Street('Magadi Street', 2005, 1.1, 2),
];

function calc(arr) {
	const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

	return [sum, sum / arr.length];
}

//Parks reports
function reportParks(p) {
	console.log('----PARKS REPORT');

	//1. Density
	p.forEach(cur => cur.treeDensity());

	//2. Average Age
	const ages = p.map(cur => new Date().getFullYear() - cur.yearBuilt);
	const [totalAge, avgAge] = calc(ages);

	console.log(`Our ${p.length} parks have an average age of ${avgAge} years`);

	//3. Parks with more than 1000 trees
	const i = p.map(cur => cur.numTrees).findIndex(cur => cur >= 1000);
	console.log(`${p[i].name} has more than 1000 trees`);
}

//Sreets report
function reportStreets(s) {
	console.log('----STREETS REPORT-----');

	//1. Total and average length of the town's streets
	const [totalLength, avgLength] = calc(s.map(cur => cur.length));
	console.log(
		`Our ${s.length} have a total length of ${totalLength} Kms and an average length of ${avgLength} Kms`
	);

	//2. Classify the sizes
	s.forEach(cur => cur.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
