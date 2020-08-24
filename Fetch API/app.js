//AJAX
//fetch API

function getWeather(woeid) {
	fetch(`https://www.metaweather.com/api/location/${woeid}`)
		.then(result => {
			//convert from json to JS
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
