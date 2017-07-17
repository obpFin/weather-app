import React from 'react';
import {Link,NavLink} from 'react-router-dom';

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
    }

    updatePeriod(period) {
        this.setState({
            selectedPeriod: period
        });
    }

    render() {
        var periods = ['Summary','Day','Hour'];

        return (
            <ul className='nav'>
                <li>
                    <NavLink activeClassName='active' to='/summary'>
                        Summary
                    </NavLink>
                </li> 
                 <li>
                    <NavLink activeClassName='active' to='/daily'>
                        Daily
                    </NavLink>
                </li>
                 <li>
                    <NavLink activeClassName='active' to='/hourly'>
                        Hourly
                    </NavLink>
                </li>                     
            </ul>
        )
    }

}


export default Nav;