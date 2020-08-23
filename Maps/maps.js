// maps
const question = new Map();
question.set('question', 'What is the best project?');
question.set(1, 'Ecommeerce');
question.set(2, 'bitcoin');
question.set(3, 'Machine learning');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong answer');

question.get(false, 'Wrong answer');

console.log(question.get('question', 'What is the best project?'));
console.log(question.size);

//removing one of the map element
// question.delete(2);

//check if element is in the map
// if (question.has(2)) {
// 	question.delete(2);
// }

//removing the map element
// question.clear();

//looping through maps using forEach
//*we can not loop through objects
question.forEach((value, key) =>
	console.log(`This is ${key}, and it is set to ${value}`)
);

console.log('=====loopig through maps with for of ======');

//looping through maps using for of
for (let [key, value] of question.entries()) {
	console.log(`This is ${key}, and it is set to ${value}`);
}
console.log('============================');

//only print if key is number
for (let [key, value] of question.entries()) {
	if (typeof key === 'number') {
		console.log(`Answer ${key}: ${value}`);
	}
}

const ans = parseInt(prompt('Write the correct answer number'));
console.log(question.get(ans === question.get('answer')));
