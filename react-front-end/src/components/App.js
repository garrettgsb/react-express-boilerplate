import React, { Component } from 'react';
import axios from 'axios';
import '../styles/App.css';
import FlashCard from './FlashCard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/users')
    .then((response) => {

      // handle success
      console.log(response.data)

      this.setState({
        message: `Hello ${response.data.users[0].name}`
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
        
        <FlashCard />

      </div>
    );
  }
}

export default App;
