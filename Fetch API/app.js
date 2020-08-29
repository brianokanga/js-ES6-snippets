//AJAX
//fetch API

function getWeather(woeid) {
	fetch(`https://www.metaweather.com/api/location/${woeid}`)
		.then(result => {
			//convert from JS to json 
			return result.json(); // returns a promise
		})

		.then(data => {
			console.log(data);
			const today = data.consolidated_weather[0];
			console.log(
				`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`
			);
		})
		.catch(error => console.log(error));
}

getWeather(44418);
getWeather(4747);

//async await version
// async function getWeather(woeid) {
// 	//promise 1
// 	const result = await fetch(
// 		`https://www.metaweather.com/api/location/${woeid}`
// 	);
// 	//promise 2
// 	const data = await result.json(); // returns a promise
// 	console.log(
// 		`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`
// 	);
// }

async function getWeatherAW(woeid) {
	try {
		const result = await fetch(
			`https://www.metaweather.com/api/location/${woeid}/`
		);
		const data = await result.json();
		const tomorrow = data.consolidated_weather[1];
		console.log(
			`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`
		);
		return data;
	} catch (error) {
		console.log(error);
	}
}

getWeatherAW(2487956);

//
let dataLondon;
getWeatherAW(44418).then(data => {
	dataLondon = data;
	console.log(dataLondon);
});
