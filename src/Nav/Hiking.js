import React from 'react';
import Container from '../Container';
import Navigation from './Navigation';

// renders Navigation
// render Container and passes in "Hiking" as the query prop
const Hiking = (props) => {
    return(
      <div>
        <Navigation />
        <h1>{props.query}</h1>
        <Container query={"Hiking"} />
      </div>
    );
  }


export default Hiking;
