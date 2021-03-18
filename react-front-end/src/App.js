import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';

// import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


import HomePage from "./components/home/index";
import Search from "./components/search/index";
import Garden from "./components/garden/index";
import Graveyard from "./components/graveyard/index";
import Login from "./components/login/index";
// import NoMatch from "./components/NoMatch";
import Layout from "./components/layout";
import NavMenu from './components/navbar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    })
  }

  render() {
    return (
      <>
        <Router>
          <NavMenu />
          <Layout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/garden" component={Garden} />
              <Route path="/graveyard" component={Graveyard} />
              <Route path="/search" component={Search} />
              <Route path="/login" component={Login} />
              {/* 404 */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </Layout>
        </Router>
      </>
    );
  }

    // return (
    //   <div className="App">
    //     {/* <h1>{ this.state.message }</h1>
    //     <button onClick={this.fetchData} >
    //       Fetch Data
    //     </button>
    //     <NavMenu />
    //   </div>
    // );
}

export default App;
