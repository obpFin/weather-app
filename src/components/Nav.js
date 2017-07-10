import React from 'react';

class Nav extends React.Component {

	constructor (props) {
		super();
		this.state = {
			selectedPeriod:'Summary',
			onSelect:this.updatePeriod
		};
		this.updatePeriod = this.updatePeriod.bind(this);
	}

	componentDidMount(){
		this.updatePeriod(this.state.selectedPeriod);
	}

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