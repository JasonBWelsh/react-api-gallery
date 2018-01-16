import React from 'react';
import {NavLink} from 'react-router-dom';

// render navigation filter links
const Navigation = props => {
  return(
    <div>
        <nav className="main-nav">
          <ul>
            <li><NavLink exact to="/" >Search</NavLink></li>
            <li><NavLink to="/rottweiler" >Rottweiler</NavLink></li>
            <li><NavLink to="/amstaff" >Amstaff</NavLink></li>
            <li><NavLink to="/hiking" >Hiking</NavLink></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navigation;
