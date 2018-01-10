import React, { Component } from 'react';
import apiKey from './config.js';
import axios from 'axios';



// Main contsainer containing state and data to send to child componenets
// Child coponenets render images passed in on props from App.js state object
class App extends Component {
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


  render() {
    console.log(this.state.photos);
    return (
      <div className="App">
        <h1>Hi there!</h1>


      </div>
    );
  }
}

export default App;
