import React from 'react';
import Container from '../Container';
import Navigation from './Navigation';

// renders Navigation
// render Container and passes in "Amstaff" as the query prop
const Amstaff = (props) => {
    return(
      <div>
        <Navigation />
        <h1>{props.query}</h1>
        <Container query={"Amstaff"} />
      </div>
    );
  }


export default Amstaff;
