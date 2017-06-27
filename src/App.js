import React from 'react';
import Axios from 'axios';
import myConfig from './config.js';
import './App.css';



const INITIAL_STATE = {
	kelvin: 0,
	city: 'Helsinki',
	windspeed: 0,
	humidity: 0, 
	showKelvins: true 
}

class Coordinates extends React.Component{

	constructor (props) {
		super();
		this.state = {
			latitude:0, 
			longitude:0
		};
	}

	getCoordinates() {
			Axios.get('https://freegeoip.net/json/', {
				method: 'get'
			}).then(response => {
				var position = response.data;
				this.setState({latitude:position.latitude,longitude:position.longitude});
			}).catch(error => {
					console.log("error getting coordinates",error)
			}); 
	}

	getInitalstate() {
		return INITIAL_STATE;
	}

	componentDidMount() {
		Axios.get('https://freegeoip.net/json/', {
				method: 'get'
			}).then(response => {
				var position = response.data;
				this.setState({latitude:position.latitude,longitude:position.longitude});
			}).then( () => {
				Axios.get("http://api.openweathermap.org/data/2.5/weather?lat=" + this.state.latitude +
				"&lon=" + this.state.longitude + "&APPID="+myConfig.apiUrl, {
				method: 'get'
			}).then(response => {
				var weather = response.data;
				console.log(weather);
			})
			}).catch(error => {
				console.log("error getting weather",error)
			});	
	}

	render(){
		console.log(this.state.latitude);
		console.log(this.state.longitude);
		return (
			<div>
				<h2>Weather App</h2>
				<p>{this.state.latitude}</p>
				<p>{this.state.longitude}</p>
			</div>
		);
	}  
}

class Weather extends React.Component {
	getInitalstate(){
		return INITIAL_STATE;
	}
};

class App extends React.Component {

	render() {
		return (
			<div id="app">
				<Coordinates />
				<p id="city" className="thick"></p>
				<p id="celsius" className="celsius thick"></p>
				<button className="toggle">Convert to Fahrenheit</button>
				<div className="text">
					<p id="desc" className="thick"></p>
				</div>
				<div className="text">
					<p id="wind" className="thick"></p>
				</div>
				<div className="text">
					<p id="hum" className="thick"></p>
				</div>
			</div>  
		);   
	}
}

export default App;
