import React from 'react';
import Skycons from 'react-skycons';
import {Circle} from 'better-react-spinkit';

class WeatherSummary extends React.Component {



    state = {

    };

    componentDidMount(){

    }


    

    render() {

        return (
            <div>
                {!this.props.weather
                 ? <Circle />
                 : <div className='summary'>
                    <p className='summary-city'>{this.props.city}</p>
                    <Skycons className='summary-icons' color='white' icon={this.props.weather.currently.icon.toUpperCase().replace(/-/g,'_')} autoplay={true}/>
                    <p className='summary-degrees'>{Math.round(this.props.weather.currently.temperature)}&#x00B0;C</p>
                    <p className='summary-summary'>{this.props.weather.currently.summary}</p>
                   </div>}
            </div>

        );
    }
}

















export default WeatherSummary;