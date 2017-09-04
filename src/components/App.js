import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import '../App.css';
import Nav from './Nav.js'
import WeatherSummary from './WeatherSummary.js'
import WeatherWeek from './WeatherWeek.js'
import WeatherDay from './WeatherDay.js'
import WeatherFooter from './WeatherFooter.js'
import {Circle} from 'better-react-spinkit';
import Api from '../utils/Api.js';

class App extends React.Component {

constructor (props) {
  super();
  this.state = {
    weather: null,
    city:null,
  };

}

componentWillMount() {
    this.setState({weather: null})     
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
        });
      });   
}

  render() {
    return (
        <Router>
        {!this.state.weather
         ? 
        <div className='loading'>
         <Circle size={100}/>
         </div>
         :
          <div className="container" id="app">
            <div className='main-content top'>
                <Nav />
                <Route path="/summary" render={(...props) => <WeatherSummary {...props} weather={this.state.weather} city={this.state.city} />} />
                <Route path="/week" render={(...props) => <WeatherWeek {...props} weather={this.state.weather} city={this.state.city} />} />
                <Route path="/day" render={(...props) => <WeatherDay {...props} weather={this.state.weather} city={this.state.city} />} />
                <Redirect from="/" to="/summary" />
            </div>
            <div className='footer'>
                <WeatherFooter weather={this.state.weather}/>
            </div>
          </div>
          }  
        </Router>
    );   
  }
}

export default App;
