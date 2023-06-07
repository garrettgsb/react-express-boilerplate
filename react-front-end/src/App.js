import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { withAuth0 } from "@auth0/auth0-react";
import Login from "./components/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  

  fetchTest = () => {
    axios
      .get("/api/categories") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

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
        this.fetchData();
      } else {
        console.log("User is not authenticated");
      }
    }
  }

  fetchData = async () => {
    const { user } = this.props.auth0;
    try {

      /**
       * Check the user is it's registered on our database
       * if not register then query the user
       */
      const getUsers = await axios.get(`/api/users`)
      const filteredUser = getUsers.data.user.find((u) => u.email === user.email)
      if(!filteredUser) {
        const params = {
          username: user.nickname,
          password: user.sub,
          email: user.email,
          profile_pic: user.picture,
          bio: ''
        }
        const postedUsers = await axios.post(`/api/users`, params);
        await axios.get(`/api/users/${postedUsers.data.user[0].id}`);
      } else {
        await axios.get(`/api/users/${filteredUser.id}`);
      }
      
      const categories = await axios.get(`/api/categories`);
      const userData = categories.data;
      console.log(userData);
    } catch (error) {
      console.error(error);
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
