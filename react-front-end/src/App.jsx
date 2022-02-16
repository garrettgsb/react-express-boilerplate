import React, { Component, useReducer } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home'
import NotFound from './NotFound';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Plant from './Plant';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      name: 'Kanye',
      plants: [{user_id: 'Hello?'}],
      users: [{name: 'Leafy'}],
      user: cookies.get('user_id'),
    }
  }

  login = () => {
    cookies.set('user_id', 2, { path: '/' });
    this.setState({
      user: cookies.get('user_id')
    });
  }

  logout = () => {
    cookies.remove('user_id', { path: '/' });
    this.setState({
      user: ''
    })
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
        <Navbar user={this.state.user} login={this.login} logout={this.logout} users={this.state.users}/>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={<Dashboard plants={this.state.plants} users={this.state.users} userId={this.state.user}/>}/>
            <Route path='/newsfeed'/>
            <Route path='/profile/:user_id' element={<Profile name={this.state.name} plants={this.state.plants} users={this.state.users}/>} />
            <Route path='/plants/:plant_id' element={<Plant plants={this.state.plants} users={this.state.users}/>}/>
            <Route path='/login/:user_id' />
            <Route path='/logout' />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
