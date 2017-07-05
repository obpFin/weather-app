import React from 'react';
import PropTypes from 'prop-types';
import Api from '../utils/Api.js';

function SelectPeriod(props) {

	var periods = ['Day','Hour','Summary'];

	return (
		<ul className='periods'>
			{periods.map(function(period) {
				return (
					<li 
						style={period === props.selectedPeriod ? {color: '#000000'} : null}
						onClick={props.onSelect.bind(null, period)}
						key={period}>
						{period}
					</li>
				)
			})}
		</ul>
	)
}

SelectPeriod.propTypes = {
	selectedPeriod: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
}

class Weather extends React.Component {

	constructor (props) {
		super();
		this.state = {
			city:null,
			weather: null,
			selectedPeriod:'Day'
		};
		this.updatePeriod = this.updatePeriod.bind(this);

	}

	componentDidMount(){
		this.updatePeriod(this.state.selectedPeriod);

		Api.fetchCoordinates()
			.then(res => {
				this.setState({
					city:res.city
				})
				Api.fetchDarkSkyWeather(res.latitude,res.longitude)
					.then(res => {
						this.setState({
							weather: res
						})
					})
			});
	}

	updatePeriod(period) {
		this.setState({
				selectedPeriod: period,
				//weather:null
		});
	}

	render() {
		return (
			<div>
				<SelectPeriod selectedPeriod={this.state.selectedPeriod}
				onSelect={this.updatePeriod}
				/>
				{!this.state.weather
				 ? <p>Loading</p>
				 : <div>
				 	<p className='city'>{this.state.city}</p>
				 	<p className='degrees'>{this.state.weather.currently.temperature} 'C</p>
				 	<p>{this.state.weather.daily.summary}</p>
				   </div>}
			</div>

		);
	}

}

















export default Weather;