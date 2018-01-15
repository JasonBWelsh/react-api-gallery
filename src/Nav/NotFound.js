import React from 'react';
import {NavLink} from 'react-router-dom';

// Renders if routes do not match URL
const NotFound = () => (
  <div>
    <h2>Page Not Found!</h2>
    <NavLink to='/' className="back">Back to Search</NavLink>
  </div>
);

export default NotFound;
