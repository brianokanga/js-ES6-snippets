//ASYNCHRONOUS JS
//simple asynchronous example
// const second = () => {
// 	setTimeout(() => {
// 		console.log('Async, Are we in yet?');
// 	}, 2000);
// };
// const first = () => {
// 	console.log('Are we in yet?');
// 	second();
// 	console.log('The End');
// };

// first();

//OLD WAYS ASYNCHRONOUS WITH CALLBACKS

//fake recipe reader simulating ajax calls loading data from remote server
function getRecipe() {
	setTimeout(() => {
		const recipeID = [523, 883, 432, 974];
		console.log(recipeID);

		//get recipe for one of the ids
		setTimeout(
			id => {
				const recipe = { title: 'Fresh tomato pasta', publisher: 'Brian' };
				console.log(`${id}: ${recipe.title}`);

				setTimeout(
					publisher => {
						const recipe2 = { title: 'Italian Pizza', publisher: 'Brian' };
						console.log(recipe);
					},
					1500,
					recipe.publisher
				);
			},
			1500,
			recipeID[2]
		);
	}, 1500);
}
getRecipe();
