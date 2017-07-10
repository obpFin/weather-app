import React from 'react';
import PropTypes from 'prop-types';
import Api from '../utils/Api.js';
import Skycons from 'react-skycons';

class WeatherDetail extends React.Component {

	constructor (props) {
		super();
		this.state = {
			city:null,
			weather: null,
			selectedPeriod:'Summary'
		};
		this.updatePeriod = this.updatePeriod.bind(this);

	}

	componentDidMount(){
		this.updatePeriod(this.state.selectedPeriod);

		Api.fetchGoogleApiCoordinates()
			.then(res => {
				Api.fetchGoogleGeocodingLocation(res.location.lat,res.location.lng)
					.then(res => {
						this.setState({city:Api.getCityFromLocationResponse(res)})
					});
				Api.fetchDarkSkyWeather(res.location.lat,res.location.lng)
					.then(res => {
						this.setState({weather: res})			
					})
				})
				
			
	}

	updatePeriod(period) {
		this.setState({
				selectedPeriod: period,
				//weather:null
		});
	}

	render() {
		return (
			<div>
				<SelectPeriod selectedPeriod={this.state.selectedPeriod}
				onSelect={this.updatePeriod}
				/>
				{!this.state.weather
				 ? <p>Loading</p>
				 : <div>
				 	<p className='city'>{this.state.city}</p>
				 	<Skycons className='icons' color='white' icon={this.state.weather.currently.icon.toUpperCase().replace(/-/g,'_')} autoplay={true}/>
				 	<p className='degrees'>{Math.round(this.state.weather.currently.temperature)}&#x00B0;C</p>
				 	<p className='daily-summary'>{this.state.weather.currently.summary}</p>
				   </div>}
			</div>

		);
	}

}

















export default WeatherDetail;