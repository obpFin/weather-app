import React from 'react';
import '../App.css';
import Nav from './Nav.js'
import WeatherSummary from './WeatherSummary.js'
import WeatherDetail from './WeatherDetail.js'




class App extends React.Component {

	render() {
		return (
			<div className="container top" id="app">
				<div className='main-content'>
				<Nav />
				<WeatherSummary />
				</div>
				<div className='footer'>
					<WeatherDetail />
				</div>
			</div>  
		);   
	}
}

export default App;
