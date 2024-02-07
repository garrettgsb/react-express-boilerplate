import React, { Component } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import "./App.css";
import TopNavigationBar from './components/TopNavigationBar';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/Register';

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
        <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginWithNavigate />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        </Container>
        <h1>{this.state.message}</h1>
        <button onClick={this.fetchData}>Fetch Data</button>
        <button onClick={this.captureScreenshot}>
          Capture Screenshot
        </button>
        {this.state.screenshot && (
          <img src={this.state.screenshot} alt="Screenshot" />
        )}
      </div>
    );
  }
}

// Helper component to pass the navigate function to Login
const LoginWithNavigate = () => {
  const navigate = useNavigate();
  return <Login navigate={navigate} />;
};

export default App;

