import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

  const INITIAL_STATE = function() {
    kelvin: 0,
    city: Helsinki,
    windspeed: 0,
    humidity: 0, 
    showKelvins: true 
  }

  class Coordinates extends React.Component{

    constructor (props) {
      super();
    }

    getCoordinates() {
      if ("geolocation" in navigator) {

        function success(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          return {latitude,longitude};
        }

        function error() {
          console.log("Unable to retrieve your location");
        }

        return navigator.geolocation.getCurrentPosition(success, error); 
      } else {
        console.log("geolocation is not available");
      }    
    },

    render(){

    }  
  }

  class Weather extends React.Component {
    getInitalstate: function(){
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
