import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = props => (
    <ul className='nav'>
         <li>
            <NavLink activeClassName='active' to='/week'>
                Viikko
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to='/summary'>
                Nyt
            </NavLink>
        </li> 
         <li>
            <NavLink activeClassName='active' to='/day'>
                Päivä
            </NavLink>
        </li>                     
    </ul>
)

export default Nav;