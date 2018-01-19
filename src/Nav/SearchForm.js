import React, { Component } from 'react';
import Container from '../Container';
import Navigation from './Navigation';

// create component for MAg Glass SVG
// rendered inside <button> element
const MagGlass = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 451 451" width="20" height="20">
    <g>
    	<path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z" fill="#FFFFFF"/>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
  );
}


class SearchForm extends Component  {

  state = {
    query: 'Fitness'
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
          {/*<button type="submit" id="submit" className="search-button"><MagGlass /></button>*/}
        </form>
        <Navigation />
        <h2 className="search-term">{this.state.query}</h2>
        <Container query={this.state.query} />
      </div>
    );
  }

}

export default SearchForm;
