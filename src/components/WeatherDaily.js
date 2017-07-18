import React from 'react';
import Skycons from 'react-skycons';
import {Circle} from 'better-react-spinkit';

class WeatherDaily extends React.Component {



    state = {

    };

    componentDidMount(){

    }


    

    render() {
        
        return (
            <div>
                {!this.props.weather
                 ? <Circle />
                 : <div className='daily'>
                    <p className='daily-summary'>{this.props.weather.daily.summary}</p>

                    <Skycons className='daily-icons' color='white' icon={this.props.weather.daily.icon.toUpperCase().replace(/-/g,'_')} autoplay={true}/>
                    <p className='daily-degrees'>{Math.round(this.props.weather.currently.temperature)}&#x00B0;C</p>
                   </div>}
            </div>

        );
    }
}

















export default WeatherDaily;