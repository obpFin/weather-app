import React from 'react';
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
	}

	render() {

		return (
			<div id="app">
				<div>
					<h2>Weather App</h2>
					<p>{this.state.latitude}</p>
					<p>{this.state.longitude}</p>
				</div>
				<Weather />
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
