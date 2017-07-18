import React from 'react';
import Skycons from 'react-skycons';
import {Circle} from 'better-react-spinkit';
import Moment from 'react-moment';


const DailyDegrees = props => {
    return (
        <table>
            <tbody>
                <tr>
                    {props.weather.hourly.data
                        .map( (hour, index) => {
                            if (index < 7) {
                            return (
                                <td key = {index}>
                                <Skycons className='hourly-icons' color='white' icon={hour.icon.toUpperCase().replace(/-/g,'_')} autoplay={true}/>  
                                <Moment className='hourly-time' format="HH" unix tz="Europe/Helsinki" >{hour.time}</Moment>
                                    <p className='hourly-degrees'>{ Math.round(hour.temperature) }&#x00B0;C</p>
                                </td>
                            )
                            }
                        })
                    }     
                </tr>
            </tbody>
        </table>
    )

}

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
                    <p className='hourly-summary'>{this.props.weather.hourly.summary}</p>
                    <DailyDegrees weather={this.props.weather}/>
                   </div>}
            </div>

        );
    }
}

















export default WeatherHourly;