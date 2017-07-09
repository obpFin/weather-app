import React from 'react';
import '../App.css';
import Weather from './Weather.js'



class App extends React.Component {

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
