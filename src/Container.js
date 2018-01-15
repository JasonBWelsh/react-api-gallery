import React, { Component } from 'react';
import apiKey from './config.js';
import axios from 'axios';
import ImageList from './Images/ImageList';


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true,
      query: ''
    }
  }

// lifecycle method called immediately after DOM loads and calls performSearch()
// as callback method
  componentDidMount() {
    this.performSearch();
  }


  //updates query property of State object with props passed from SearchForm
  // passes query to performSearch method
  componentWillReceiveProps(nextProps) {
    this.setState({ query: nextProps.query });
    this.performSearch(nextProps.query);
  }

// user method that makes data request from Flickr api
//parses data to json
// updates state with returned data
  performSearch = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.query}&safe_search=1&per_page=12&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

// render container div (not Container component)
// if loading property of state object is truthy
// displays laoding message
// else renders ImageList component passing data and query props
  render() {
    return (
        <div className="Container">
          {
            (this.state.loading)
              ? <p>Loading...</p>
              : <ImageList data={this.state.photos} query={this.state.query}/>
          }
        </div>
    );
  }
}
  // example flickr image https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

export default Container;
