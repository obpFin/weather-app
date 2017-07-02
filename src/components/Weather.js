import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import MyConfig from '../config.js';
import Api from '../utils/Api.js';

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
		Api.fetchCoordinates()
			.then(res => {
				console.log('res',res);
				Api.fetchWeather(res.latitude,res.longitude);
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