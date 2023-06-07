import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { withAuth0 } from "@auth0/auth0-react";
import Login from "./components/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!",
    };
  }

  

  fetchTest = () => {
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

  componentDidMount() {
    const { isAuthenticated } = this.props.auth0;

    if (isAuthenticated) {
      console.log("User is authenticated");
      this.fetchData();
    } else {
      console.log("User is not authenticated");
    }
  }

  componentDidUpdate(prevProps) {
    const { isAuthenticated } = this.props.auth0;

    if (isAuthenticated !== prevProps.auth0.isAuthenticated) {
      if (isAuthenticated) {
        console.log("User is authenticated");
        this.fetchData();
      } else {
        console.log("User is not authenticated");
      }
    }
  }

  fetchData = async () => {
    const { user } = this.props.auth0;
    try {
      const response = await axios.get(`/api/test?email=${user.email}`);
      const userData = response.data;
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  
  

  render() {
    const { isAuthenticated, logout } = this.props.auth0;
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <button onClick={this.fetchTest}>Fetch Data</button>
        {isAuthenticated ? (
          <div>
            <h1>You are logged in!</h1>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          </div>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default withAuth0(App);
