//PROMISES BASICS

//1. First function(first promise)

//Producing a Promise
const getIDs = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([523, 883, 432, 974]);
	}, 1500);
});

//2. Second function(second promise)
//recID is passed as an argument of the setTimeOut, which will then becoee ID
//inside the promise callback function ID is used on resolve as the value
const getRecipe = recID => {
	return new Promise((resolve, reject) => {
		setTimeout(
			ID => {
				const recipe = { title: 'Fresh tomato pasta', publisher: 'Brian' };
				resolve(`${ID}: ${recipe.title}`);
			},
			1500,
			recID
		);
	});
};

//3. Third function(Third promise)
//publisher (input to the publisher function) which is passed as an argument of the setTimeOut, which will then becoee pub
const getRelated = publisher => {
	//to fetch a recipe which is related to the publisher of the first recipe
	//we can only load related recipe if e know the publisher of the first
	return new Promise((resolve, reject) => {
		setTimeout(
			pub => {
				const recipe = { title: 'Italian Pizza', publisher: 'Brian' };
				resolve(`${pub}: ${recipe.title}`); //how would you read recipe.publisher?
			},
			1500,
			publisher
		);
	});
};

//Consuming a Promise
//chaining promises to avoid "callback hell"
getIDs
	.then(IDs => {
		console.log(IDs);
		return getRecipe(IDs[2]); //we will have a promise after this return
	})
	//second .then to hanndle the fulfillment of the second promise
	.then(recipe => {
		console.log(recipe);
		return getRelated('Brian'); //get Brian'
	})
	.then(recipe => {
		console.log(recipe);
	})
	.catch(error => {
		console.log('error!!');
	});
