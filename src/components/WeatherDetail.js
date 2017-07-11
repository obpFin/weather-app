import React from 'react';
import PropTypes from 'prop-types';
import Api from '../utils/Api.js';
import Skycons from 'react-skycons';

class WeatherDetail extends React.Component {	

	constructor (props) {
		super();
		this.state = {
			weather: null
		};

	}

	componentDidMount(){

		Api.fetchGoogleApiCoordinates()
			.then(res => {
				console.log('location',res);
				Api.fetchDarkSkyWeather(res.location.lat,res.location.lng)
			.then(res => {
				console.log('weather');
				this.setState({weather: res})			
			})
			})	
			
	}
		


	render() {
		return (
			<div>
				{!this.state.weather
				 ? <p>Loading</p>
				 : <div>
				 	<tr className='row'>
				 		<td>Cloudcover: {(this.state.weather.currently.cloudCover * 100) + '%'}</td>
				 	</tr>
				 	<p className=''>{this.state.weather.currently.summary}</p>
				   </div>}
			</div>
		);
	}
}

















export default WeatherDetail;