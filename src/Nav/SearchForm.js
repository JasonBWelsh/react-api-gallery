import React, { Component } from 'react';
import Container from '../Container';
import Navigation from './Navigation';

class SearchForm extends Component  {

  state = {
    query: 'Robots'
  }
  onSearchChange = e => {
    this.setState({ query: e.target.value });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ query:this.state.query });
    e.currentTarget.reset();
  }
//renders the Search Component, Nav Component, and the Container component.
  render(){
    return(
      <div>
        <form className="search-form" onSubmit={this.handleSubmit} >
          <label className="form-label" htmlFor="search">Search</label>
          <input type="search"
                  className="search-input"
                  onChange={this.onSearchChange}
                  name="search"
                  ref={(input) => this.query = input}
                  placeholder="Search..." />
          {/*<button type="submit" id="submit" className="search-button"></button>*/}
        </form>
        <Navigation />
        <h2 className="search-term">{this.state.query}</h2>
        <Container query={this.state.query} />
      </div>
    );
  }

}

export default SearchForm;
