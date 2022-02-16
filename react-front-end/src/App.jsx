import React, { Component, useReducer } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home'
import NotFound from './NotFound';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      name: 'Kanye',
      plants: [{user_id: 'Hello?'}],
      users: [{name: 'Leafy'}]
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

  fetchUsers = () => {
    axios.get('/api/users') // Just to test that DB layer works
    .then((response) => {
      console.log('Users: ' + response.data.users)
      this.setState({
        users: response.data.users
      });
    }) 
  }

  fetchPlants = () => {
    axios.get('/api/plants') // Just to test that DB layer works
    .then((response) => {
      console.log('Plants: ' + response.data.plants)
      this.setState({
        plants: response.data.plants
      });
    }) 
  }

  componentDidMount() {
    this.fetchPlants();
    this.fetchUsers();
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Navbar />
          <h1>{ this.state.message }</h1>
          <button onClick={this.fetchData} >
            Fetch Data
          </button>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path='/' />
            <Route path='/dashboard/:user_id' />
            <Route path='/newsfeed'/>
            <Route path='/profile/:user_id' element={<Profile name={this.state.name} plants={this.state.plants} users={this.state.users}/>} />
          </Routes>
          <h1>Test DB fetch Users</h1>
          <button onClick={this.fetchUsers} >
            Fetch Users from DB
          </button>
          <p>Users JSON Object:<br/>{ JSON.stringify(this.state.users) }</p>
          <h1>fetch Plants! first plant: {this.state.plants[0].nickname}</h1>
          <button onClick={this.fetchPlants} >
            Fetch Plants from DB
          </button>
          <p>Plants JSON Object:<br/>{ this.state.plants.length > 1 && JSON.stringify(this.state.plants) }</p>
        </div>
      </Router>
    );
  }
}

export default App;
