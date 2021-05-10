import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }
  //this now fetches the user info and posts for user #1 Michael Scott
  fetchDataUser1 = () => {
    axios.get('/api/users/profile/1') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      // console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
    .catch(err => {
      console.log("Error", err)
    })
  }

  // axios.post('/login')
  // .then((response) => {

  // })

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchDataUser1} >
          Fetch Data
        </button>        
      </div>
    );
  }
}

export default App;
