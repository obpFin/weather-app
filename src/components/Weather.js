import React from 'react';
import PropTypes from 'prop-types';
import Api from '../utils/Api.js';

class Weather extends React.Component {

	constructor (props) {
		super();
		this.state = {
			latitude: 0, 
			longitude: 0,
			weather: null
		};
	}

	componentDidMount(){
		Api.fetchCoordinates()
			.then(res => {
				console.log('res',res);
				Api.fetchDarkSkyWeather(res.latitude,res.longitude)
					.then(res => {
						this.setState({
							weather: res
						})
					})
			});
	}

	render() {
		return (
			<div>
				{!this.state.weather
				 ? <p>Loading</p>
				 : <p>{this.state.weather.daily.summary}</p>}	
			</div>

		);
	}

}

















export default Weather;