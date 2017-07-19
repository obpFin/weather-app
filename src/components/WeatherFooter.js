import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

const WeatherFooter = props => (  

    <div>
        <table>
            <tbody>
            <tr className='row'>
                <td className='row'>
                    <Moment format="ddd, H:mm " unix tz="Europe/Helsinki" >{(props.weather.currently.time)}</Moment>
                </td>
                <td className='row'>Tuulisuus: {Math.round(props.weather.currently.windSpeed * 1.6) + ' km/h'}</td>
                <td className='row'>Pilvisyys: {Math.round((props.weather.currently.cloudCover * 100)) + '%'}</td>
                <td className='row'>Kosteus: {(props.weather.currently.humidity * 100) + ' %'}</td>
            </tr>
            </tbody>
        </table>
    </div>
);

export default WeatherFooter;