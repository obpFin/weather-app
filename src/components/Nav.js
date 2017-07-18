import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Nav = props => (

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

export default Nav;