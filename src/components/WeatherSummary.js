import React from 'react';
import Skycons from 'react-skycons';

const WeatherSummary = props => (

    <div>
        <p className='summary-city'>{props.city}</p>
        <table>
            <tbody>
                <tr>
                    <td>
                        <Skycons className='summary-icons' color='white' icon={props.weather.currently.icon.toUpperCase().replace(/-/g,'_')} autoplay={true}/>
                    </td>
                    <td>
                        <p className='summary-degrees'>{Math.round(props.weather.currently.temperature)}&#x00B0;C</p>
                    </td>    
                </tr>
            </tbody>
        </table>
        <p className='summary-summary'>{props.weather.currently.summary}</p>
    </div>

);
    
export default WeatherSummary;