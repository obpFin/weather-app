import React from 'react';
import Skycons from 'react-skycons';
import Moment from 'react-moment';
import 'moment/locale/fi';

const HourlyDegrees = props => {
    return (
        <table>
            <tbody>
                <tr>
                    {props.weather.hourly.data
                        .map( (hour, index) => {
                            if (index < 7) {
                                return (
                                    <td key = {index}>
                                    <Skycons className='icons' color='white' icon={hour.icon.toUpperCase().replace(/-/g,'_')} autoplay={true}/>  
                                    <Moment className='time' format="HH" unix tz="Europe/Helsinki">{hour.time}</Moment>
                                        <p className='daily-degrees'>{ Math.round(hour.temperature) }&#x00B0;C</p>
                                    </td>
                                )
                            }
                            return null;
                        })
                    }     
                </tr>
            </tbody>
        </table>
    )

}

const WeatherDay = props => (

    <div>
        <p className='daily-summary'>{props.weather.hourly.summary}</p>
        <HourlyDegrees weather={props.weather}/>
    </div>

);
    
export default WeatherDay;