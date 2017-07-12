import React from 'react';
import PropTypes from 'prop-types';
import Api from '../utils/Api.js';
import Skycons from 'react-skycons';
import Moment from 'react-moment';
import 'moment-timezone';


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
				console.log("time: ",this.state.weather.currently.time)			
			})
			})	
	}

	render() {
		        console.log('render called');

		return (
			<div>

				{!this.state.weather
				 ? <p>Loading</p>
				 : <div>
				 	<table>
				 		<tbody>
					 	<tr className='row'>
					 		<td className='row'>
					 			<Moment interval={1000} format="ddd, h:mm:ss a" unix tz="Europe/Helsinki" >{(this.state.weather.currently.time)}</Moment>
							</td>
					 		<td className='row'>Windspeed: {Math.round(this.state.weather.currently.windSpeed * 1.6) + ' km/h'}</td>
					 		<td className='row'>Cloudcover: {(this.state.weather.currently.cloudCover * 100) + '%'}</td>
					 		<td className='row'>Windspeed: {Math.round(this.state.weather.currently.windSpeed * 1.6) + ' km/h'}</td>
					 	</tr>
					 	
					 		
					 
					 	</tbody>
					 </table>
				   </div>}
			</div>
		);
	}
}

















export default WeatherDetail;