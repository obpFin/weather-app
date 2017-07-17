import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../App.css';
import Nav from './Nav.js'
import WeatherSummary from './WeatherSummary.js'
import WeatherDetail from './WeatherDetail.js'
import Api from '../utils/Api.js';

//var Router = ReactRouter.BrowserRouter;
//var Route = ReactRouter.Route;

class App extends React.Component {

constructor (props) {
  super();
  this.state = {
    weather: null,
    city:null,
    view:'summary'
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
        <Router>
          <div className="container" id="app">
            <div className='main-content top'>
            {//<Nav />
            }
            <Route path='/summary' component={WeatherSummary} />
            <WeatherSummary weather={this.state.weather} city={this.state.city}/>
            </div>
            <div className='footer'>
              <WeatherDetail weather={this.state.weather}/>
            </div>
          </div>  
      </Router>
    );   
  }
}

export default App;
