import React, { Component } from 'react';
// Import Router objects from React Router
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Import components for route matches
import Rottweiler from './Nav/Rottweiler';
import Amstaff from './Nav/Amstaff';
import Hiking from './Nav/Hiking';
import SearchForm from './Nav/SearchForm';
import NotFound from './Nav/NotFound';

// Matches routes and renders components based on search, filter, or not found
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' render={ () => (<SearchForm />)} />
            <Route exact path="/rottweiler" render={ () => (<Rottweiler query={"rottweiler"}/>)} />
            <Route exact path="/amstaff" render={ () => (<Amstaff query={"amstaff"}/>)} />
            <Route exact path="/hiking" render={ () => (<Hiking query={"hiking"}/>)} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
