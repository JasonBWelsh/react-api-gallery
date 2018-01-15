import React, { Component } from 'react';
import Container from '../Container';
import Navigation from './Navigation';

class SearchForm extends Component  {

  state = {
    searchText: ''
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault;
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }
//renders the Search Component, Nav Component, and the Container component.
  render(){
    return(
      <div>
        <form className="search-form" onSubmit={this.handleSubmit} >
          <label className="is-hidden" htmlFor="search">Search</label>
          <input type="search"
                  onChange={this.onSearchChange}
                  name="search"
                  ref={(input) => this.query = input}
                  placeholder="Search..." />
          <button type="submit" id="submit" className="search-button">svg icon here...</button>
        </form>
        <h2>{this.state.searchText}</h2>
        <Container query={this.state.searchText} />
      </div>
    );
  }

}

export default SearchForm;
