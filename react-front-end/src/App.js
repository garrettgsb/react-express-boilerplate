import React, { Component } from 'react';
import axios from 'axios';
import TopNavigationBar from './components/TopNavigationBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!",
      screenshot: null,
    };
  }

  fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };

  captureScreenshot = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/capture-screenshot"
      );
      this.setState({
        screenshot: `data:image/png;base64,${response.data}`,
      });
    } catch (error) {
      console.error("Error capturing screenshot:", error);
    }
  };

  render() {
    return (
      <div className="App">
        <TopNavigationBar />
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
      </div>
    );
  }
}

export default App;
