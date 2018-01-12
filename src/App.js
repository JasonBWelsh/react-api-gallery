import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Container from './Container';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Hi there!</h1>
          <Container />
        </div>
    );
  }
}

export default App;
