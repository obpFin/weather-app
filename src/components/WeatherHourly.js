import React from 'react';
import Skycons from 'react-skycons';
import {Circle} from 'better-react-spinkit';

class WeatherHourly extends React.Component {



    state = {

    };

    componentDidMount(){

    }


    

    render() {
        
        return (
            <div>
                {!this.props.weather
                 ? <Circle />
                 : <div className='hourly'>
                    <p className='hourly-city'>{this.props.city}</p>
                    {//<Skycons className='hourly-icons' color='white' icon={this.props.weather.currently.icon.toUpperCase().replace(/-/g,'_')} autoplay={true}/>
                    }   
                    <p className='hourly-degrees'>{Math.round(this.props.weather.currently.temperature)}&#x00B0;C</p>
                    <p className='hourly-summary'>{this.props.weather.currently.summary}</p>
                   </div>}
            </div>

        );
    }
}

















export default WeatherHourly;