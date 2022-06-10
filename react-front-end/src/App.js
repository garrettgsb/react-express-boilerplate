import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './AudioPlayer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      src: ''
    }
  }

  fetchData = () => {
    axios.get('https://api.deezer.com/track/3135554') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.title) // Just the message
      this.setState({
        message: response.data.title,
        src: response.data.preview
      });
    }) 
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
        <audio autoPlay name="media">
          <source src="https://cdns-preview-b.dzcdn.net/stream/c-b2e0166bba75a78251d6dca9c9c3b41a-7.mp3" type="audio/mpeg" />
          Your browser does not support MP3
        </audio>
      </div>
    );
  }
}

export default App;
