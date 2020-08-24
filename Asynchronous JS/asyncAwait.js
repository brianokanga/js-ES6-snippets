//PROMISES BASICS

//1. First function(first promise)

//Producing a Promise
// getIDs is the promise
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

//Consuming a Promise with Async await
//chaining promises to avoid "callback hell and compexity of .then"
//asynchronous function
//getIDs is our first promise from first function
//the await keyword stops the promise from executing until its resolved
//the await keyword can only be used in an async function(which runs in background hence cannot stop main code)
//all we do is to block the asyc function till promise resolve
async function getRecipeAW() {
	const IDs = await getIDs; //if resolved the value is assigned to const IDs(the array)
	console.log(IDs);
	const recipe = await getRecipe(IDs[2]); //returns a promise
	console.log(recipe);
	const related = await getRelated('Brian');
	console.log(related);

	return recipe;
}

getRecipeAW().then(result => console.log(`${result} is the best ever`));
