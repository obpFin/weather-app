import React from 'react';
import Skycons from 'react-skycons';
import {Circle} from 'better-react-spinkit';

const WeatherDaily = props => (

    <div>
        {!props.weather
         ? <Circle />
         : <div className='daily'>
            <p className='daily-summary'>{props.weather.daily.summary}</p>

            <Skycons className='daily-icons' color='white' icon={props.weather.daily.icon.toUpperCase().replace(/-/g,'_')} autoplay={true}/>
            <p className='daily-degrees'>{Math.round(props.weather.currently.temperature)}&#x00B0;C</p>
           </div>}
    </div>

);
    
export default WeatherDaily;