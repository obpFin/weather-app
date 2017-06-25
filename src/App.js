import React, { Component } from 'react';
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
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(function (position) {
        resolve([position.coords.latitude, position.coords.longitude]);
        });
      });   
    }

    getInitalstate() {
      return INITIAL_STATE;
    }

    componentDidMount() {
      var position = this.getCoordinates();
      fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + this.position.latitude +
      "&lon=" + this.position.longitude + "&APPID="+myConfig.apiUrl)
        .then(response => response.json())
        .then()
        .catch();
    }

    render(){
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
        <div id="title">
        </div>
        <p id="city" class="thick"></p>
        <img id="weatherIcon" src="" />
        <p id="celsius" class="celsius thick"></p>
        <button class="toggle">Convert to Fahrenheit</button>
        <div class="text">
          <p id="desc" class="thick"></p>
        </div>
        <div class="text">
          <p id="wind" class="thick"></p>
        </div>
        <div class="text">
          <p id="hum" class="thick"></p>
        </div>
      </div>  
    );   
  }
}

export default App;
