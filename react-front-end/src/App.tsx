import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import './App.css';
import { CityList } from './components/mytrips/CityList';
import { LoginInForm } from './components/auth/LoginInForm';
import { Profile } from './components/profile/profile';

import { Hello } from "./components/explore/searchbox";

export default function App() {
  // class App extends Component <{}, {message: string}> {
  //   constructor(props: CityList) {
  //     super(props)
  //     this.state = {
  //       message: 'Click the button to load data!'
  //     }
  //   }

  //   fetchData = () => {
  //     axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //     .then((response) => {
  //       // handle success
  //       console.log(response.data) // The entire response from the Rails API

  //       console.log(response.data.message) // Just the message
  //       this.setState({
  //         message: response.data.message
  //       });
  //     }) 
  //   }

  // render() {
  // return (
  //   <div className="App">
  //     <h1>{ this.state.message }</h1>
  //     <button onClick={this.fetchData} >
  //       Fetch Data
  //     </button>        
  //   </div>
  // );
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to='/'>Explore</Link></li>
          <li><Link to='/trips'>My Trips</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path='/login'>
          <LoginInForm />
        </Route>

        <Route path='/trips'>
          <CityList city="Vancouver" />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
}
  // }


  // export default App;
