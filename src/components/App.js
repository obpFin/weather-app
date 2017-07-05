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
			<div className="container" id="app">
				<div>
				<Weather />
				</div>
			</div>  
		);   
	}
}

export default App;
