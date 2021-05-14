import React, { Component } from "react";
import axios from "axios";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Moods from "./components/moods";
import Resource from "./components/resource";
import Login from "./components/login";
import Register from "./components/register";
import UserProfile from "./components/user_profile";
import MeditationAnimation from "./components/meditation_animation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!",
    };
  }
  //this now fetches the user info and posts for user #1 Michael Scott
  fetchDataUser1 = () => {
    axios
      .get("/api/users/profile/1") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        // console.log(response.data.message) // Just the message
        this.setState({
          message: response.data.message,
        });
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  // axios.post('/login')
  // .then((response) => {

  // })

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/moods">
            <Moods />
          </Route>
          <Route path="/moods/:category">
            <Resource />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/meditation">
            <MeditationAnimation />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
