import React from 'react';
import '../App.css';
import Nav from './Nav.js'
import WeatherSummary from './WeatherSummary.js'



class App extends React.Component {

	render() {
		return (
			<div className="container" id="app">
				<div className='main-content'>
				<Nav />
				<WeatherSummary />
				</div>
				<div className='footer'>

				</div>
			</div>  
		);   
	}
}

export default App;
