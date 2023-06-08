import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { withAuth0 } from "@auth0/auth0-react";
import Login from "./components/login";
import Signup from "./components/signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      user: {},
    };
  }

  fetchTest = () => {
    axios
      .get("/api/categories") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        // console.log(response.data); // The entire response from the Rails API
        this.setState({
          categories: response.data
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
        this.fetchData().then((response) => {
          this.setState({ user: response });
        });
      } else {
        console.log("User is not authenticated");
      }
    }
  }

  fetchData = async () => {
    const { user } = this.props.auth0;
    try {
      // Check if the user is registered in our database
      const getUsers = await axios.get(`/api/users`);
      const filteredUser = getUsers.data.users.find((u) => u.email === user.email);
  
      if (!filteredUser) {
        // User is not registered, perform registration
        const params = {
          username: user.nickname,
          password: user.sub,
          email: user.email,
          profile_pic: user.picture,
          bio: ''
        };
  
        // Register the user
        const postedUsers = await axios.post(`/api/users`, params);
        const response = await axios.get(`/api/users/${postedUsers.data.user.id}`);
        console.log(response);
        return response.data[0];
      } else {
        // User is already registered
        const response = await axios.get(`/api/users/${filteredUser.id}`);
        console.log(response);
        return response.data[0];
      }
    } catch (error) {
      console.error(error);
      // Throw the error to propagate it to the caller
      throw error;
    }
  };

  render() {
    const { isAuthenticated, logout } = this.props.auth0;
    return (
      <div className="App">
        <h1>Categories</h1>
        {
          this.state.categories.map((c) => 
            <p>{c.name}</p>
          )
        }
        <button onClick={this.fetchTest}>Fetch Data</button>
        {isAuthenticated ? (
          <div>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          <p>
            {this.state.user.id}
          </p>
          </div>
        ) : (
          <div>
            <Login />
            <Signup />
          </div>
        )}
      </div>
    );
  }
}

export default withAuth0(App);
