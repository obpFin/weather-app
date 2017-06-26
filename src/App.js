import React, { Component } from 'react';
import Axios from 'axios';
import logo from './logo.svg';
import { myConfig } from './config.js';
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
        }).catch(function(error){
            console.log("error getting coordinates",error)
        }); 
    }

    getInitalstate() {
      return INITIAL_STATE;
    }

    componentDidMount() {
      var position = this.getCoordinates();
      fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + this.state.latitude +
      "&lon=" + this.state.longitude + "&APPID="+myConfig.apiUrl)
        .then(response => response.json())
        .then(responseData => {
          this.setState({weather:responseData});
        })
        .catch(error => {
          console.log('Error getting weather data',error);
        });
    }

    render(){
      console.log(this.state.latitude);
      console.log(this.state.longitude);
      return null;
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
        <div id="title">
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
