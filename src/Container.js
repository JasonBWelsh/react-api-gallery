import React, { Component } from 'react';
import apiKey from './config.js';
import axios from 'axios';

// component imports
import ImageList from './Images/ImageList';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.query}&safe_search=1&per_page=12&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  // example flickr image https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

  render() {
    console.log(this.state.photos);

    return (
        <div className="Container">
          <ImageList data={this.state.photos} />

        </div>
    );
  }
}


export default Container;
