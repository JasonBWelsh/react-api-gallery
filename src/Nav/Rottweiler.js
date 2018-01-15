import React from 'react';
import Container from '../Container';
import Navigation from './Navigation';

// renders Navigation
// render Container and passes in "Rottweiler" as the query prop
const Rottweiler = (props) => {
    return(
      <div>
        <Navigation />
        <h1>{props.query}</h1>
        <Container query={"Rottweiler"} />
      </div>
    );
  }


export default Rottweiler;
