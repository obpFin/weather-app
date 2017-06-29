import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import myConfig from '../config.js';

const INITIAL_STATE = {
		kelvin: 0,
		city: 'Helsinki',
		windspeed: 0,
		humidity: 0, 
		showKelvins: true 
}

class Weather extends React.Component {

	constructor (props) {
		super();
		this.state = {
			latitude:0, 
			longitude:0,
			kelvins:0,
		};
	}

	componentDidMount(){
		this.getCoordinates().then( () => {
		this.getWeather();
		})
	}

	getCoordinates() {
		return new Promise(function (fulfill, reject){
			Axios.get('https://freegeoip.net/json/', {
			method: 'get'
			}).then(response => {
				var position = response.data;
				this.setState({latitude:position.latitude,longitude:position.longitude});
			}).catch(error => {
				console.log("error getting coordinates",error)
			});
		});
	}

	getWeather() {
		Axios.get("http://api.openweathermap.org/data/2.5/weather?lat=" + this.state.latitude +
			"&lon=" + this.state.longitude + "&APPID="+myConfig.apiUrl, {
			method: 'get'
		}).then(response => {
			console.log(response);
			this.setState({ kelvins:response.data });
		}).catch(error => {
			console.log("error getting weather",error)
		});	
	}

	render() {

		return (
			<div>
				<p>Kelvins:{this.state.kelvins}</p>	
			</div>

			);
	}

}

















export default Weather;