import Axios from 'axios';
import myConfig from '../config.js';

export default {
	fetchCoordinates: function() {
		return Axios.get('https://freegeoip.net/json/', {
			method: 'get'
			}).then(response => {
				var position = response.data;
				return position;
			}).catch(error => {
				console.log("error getting coordinates",error)
			});
	},

	fetchWeather: function(lat,lon) {
		return Axios.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat +
		"&lon=" + lon + "&APPID="+myConfig.apiUrl, {
		method: 'get'
		}).then(response => {
			console.log(response);
			return response.data;
		}).catch(error => {
			console.log("error getting weather",error)
		});
	},

	fetchDarkSkyWeather: function(lat,lon) {
		return Axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + myConfig.darkSky +
		'/' + lat + ',' + lon + '?units=si&lang=fi', {
		method: 'get'
		}).then(response => {
			console.log(response);
			return response.data;
		}).catch(error => {
			console.log("error getting weather",error)
		});
	}
} 