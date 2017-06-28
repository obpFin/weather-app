import React from 'react';
import Axios from 'axios';
import '../App.css';
import Weather from './Weather.js'

class App extends React.Component {

	constructor (props) {
		super();
		this.state = {
			latitude:0, 
			longitude:0
		};
	}

	componentDidMount() {

		Axios.get('https://freegeoip.net/json/', {
			method: 'get'
		}).then(response => {
			var position = response.data;
			this.setState({latitude:position.latitude,longitude:position.longitude});
		}).catch(error => {
			console.log("error getting coordinates",error)
		});
	}

	render() {
		console.log(this.state.latitude);
		console.log(this.state.longitude);

		return (
			<div id="app">
				<div>
					<h2>Weather App</h2>
					<p>{this.state.latitude}</p>
					<p>{this.state.longitude}</p>
				</div>
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
