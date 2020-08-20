//ARRAYS ES6

//ES5
// const boxes = document.querySelectorAll('.box');
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function (cur) {
// 	cur.style.backgroundColor = 'dodgerblue';
// });

// for (var i = 0; i < boxesArr5.length; i++) {
// 	if (boxesArr5[i].className === 'box blue') {
// 		continue; //skips the if true
// 	}
// 	boxesArr5[i].textContent = 'changed to blue';
// }

//ES6
const boxes = document.querySelectorAll('.box');
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => (cur.style.backgroundColor = 'dodgerblue'));
for (const cur of boxesArr6) {
	if (cur.className.includes('blue')) {
		continue; //skips the if true
	}
	cur.textContent = 'changed to blue';
}

//findIndex work like map/forEach has access to current, index and entire array
// find the child over 18 and their age
let ages = [12, 17, 8, 21, 14, 11];
let index = ages.findIndex(cur => cur >= 18);
let over18 = ages.find(cur => cur >= 18);

console.log(index);
console.log(over18);
