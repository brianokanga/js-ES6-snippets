// // The first way to clear an array is to assign an empty array to the variable:

// let myArray = [1, 2, 3, 4];
// myArray = [];

// console.log(myArray);

// // The second way is by using Array.prototype.pop() which removes the last element from an array and returns that element.

// const myArray = [1, 2, 3, 4];

// myArray.forEach(() => {
// 	myArray.pop();
// });

// console.log(myArray);

// // The third way to clear an array is by simply setting the length of the array to 0.

// let myArray = [1, 2, 3, 4];
// myArray.length = 0;

// console.log(myArray);

var years = [1960, 1978, 1895, 1995, 1700];

function arrCalc(arr, fn) {
	var arrAges = [];
	for (var i = 0; i < arr.length; i++) {
		arrAges.push(fn(arr[i]));
	}
	return arrAges;
}

function calcAge(el) {
	return 2020 - el;
}

var x = arrCalc(years, calcAge);

console.log(x);
