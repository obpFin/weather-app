import React from 'react';
import Skycons from 'react-skycons';
import Moment from 'react-moment';

const DailyDegrees = props => {
    return (
        <table>
            <tbody>
                <tr>
                    {props.weather.daily.data
                        .map( (day, index) => {
                            if (index>0 &&index <=4) {
                                return (
                                    <td key = {index}>
                                        <Skycons className='icons' color='white' icon={day.icon.toUpperCase().replace(/-/g,'_')} autoplay={true}/>  
                                        <Moment className='time' format="dddd" unix tz="Europe/Helsinki" >{day.time}</Moment>
                                        <p className='week-summary'>{day.summary}</p>
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

const WeatherWeek = props => (

    <div>
        <p className='daily-summary'>{props.weather.daily.summary}</p>
        <DailyDegrees weather={props.weather}/>
    </div>

);
    
export default WeatherWeek;