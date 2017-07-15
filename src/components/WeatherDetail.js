import React from 'react';
import Moment from 'react-moment';
import {Circle} from 'better-react-spinkit';
import 'moment-timezone';


class WeatherDetail extends React.Component {   

    state = {

    };

    componentDidMount(){

    }

    render() {
        return (
            <div>
                {!this.props.weather
                 ? <Circle />
                 : <div>
                    <table>
                        <tbody>
                        <tr className='row'>
                            <td className='row'>
                                <Moment interval={1000} format="ddd, h:mm a" unix tz="Europe/Helsinki" >{(this.props.weather.currently.time)}</Moment>
                            </td>
                            <td className='row'>Windspeed: {Math.round(this.props.weather.currently.windSpeed * 1.6) + ' km/h'}</td>
                            <td className='row'>Cloudcover: {Math.round((this.props.weather.currently.cloudCover * 100)) + '%'}</td>
                            <td className='row'>Humidity: {(this.props.weather.currently.humidity * 100) + ' %'}</td>
                        </tr>
                        </tbody>
                     </table>
                   </div>}
            </div>
        );
    }
}

















export default WeatherDetail;