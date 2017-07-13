import React from 'react';
import '../App.css';
import Nav from './Nav.js'
import WeatherSummary from './WeatherSummary.js'
import WeatherDetail from './WeatherDetail.js'
import Api from '../utils/Api.js';

class App extends React.Component {

constructor (props) {
	super();
	this.state = {
		weather: null,
		city:null
	};

}

componentDidMount(){
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

	render() {
		return (
			<div className="container" id="app">
				<div className='main-content top'>
				<Nav />
				<WeatherSummary weather={this.state.weather} city={this.state.city}/>
				</div>
				<div className='footer'>
					<WeatherDetail weather={this.state.weather}/>
				</div>
			</div>  
		);   
	}
}

export default App;
