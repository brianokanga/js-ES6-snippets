//ASYNCHRONOUS JS

const second = () => {
	setTimeout(() => {
		console.log('Async, Are we in yet?');
	}, 2000);
};
const first = () => {
	console.log('Are we in yet?');
	second();
	console.log('The End');
};

first();
