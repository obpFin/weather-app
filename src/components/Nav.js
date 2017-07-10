import React from 'react';
import PropTypes from 'prop-types';

class Nav extends React.Component {



	constructor (props) {
		super();
		this.state = {
			selectedPeriod:'Summary',
			onSelect:this.updatePeriod
		};
		this.updatePeriod = this.updatePeriod.bind(this);

	}

	//selectedPeriod={this.state.selectedPeriod}
				//onSelect={this.updatePeriod}

	componentDidMount(){
		this.updatePeriod(this.state.selectedPeriod);
	}
/*
	SelectPeriod.propTypes = {
		selectedPeriod: PropTypes.string.isRequired,
		onSelect: PropTypes.func.isRequired,
	}
*/
	updatePeriod(period) {
		this.setState({
			selectedPeriod: period
		});
	}

	render() {
		var periods = ['Summary','Day','Hour'];

		return (
			<ul className='periods'>
				{periods.map(period => {
					return (
						<li 
							style={period === this.state.selectedPeriod ? {color: '#000000'} : null}
							onClick={this.state.onSelect.bind(this, period)}
							key={period}>
							{period}
						</li>
					)
				})}
			</ul>
		)
	}

}


export default Nav;