import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="title">
        </div>
        <p id="city" class="thick"></p>
        <img id="weatherIcon" src="" />
        <p id="celsius" class="celsius thick"></p>
        <button class="toggle">convert to Fahrenheit</button>
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
