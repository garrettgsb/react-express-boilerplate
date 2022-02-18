import React, { Component, useReducer } from 'react';
import axios from 'axios';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home'
import NotFound from './NotFound';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Plant from './Plant';
import Cookies from 'universal-cookie';
import Newsfeed from './Newsfeed';
import Wishlist from './Wishlist';

const cookies = new Cookies();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      name: 'Kanye',
      plants: [{ user_id: 'Hello?' }],
      users: [{ name: 'Leafy' }],
      species: [{ name: 'beleaf' }],
      posts: [{ user_id: 'Hello?' }],
      user: cookies.get('user_id'),
      wishlist: '',
    }
  };

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

  useEffect

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
  };

  fetchUsers = () => {
    axios.get('/api/users') // Just to test that DB layer works
      .then((response) => {
        console.log('Users: ' + response.data.users)
        this.setState({
          users: response.data.users
        });
      })
  };

  fetchPlants = () => {
    axios.get('/api/plants')
      .then((response) => {
        console.log('Plants: ' + response.data.plants)
        this.setState({
          plants: response.data.plants
        });
      })
  };

  fetchPosts = () => {
    axios.get('/api/posts')
      .then((response) => {
        console.log('Posts: ' + response.data.posts)
        this.setState({
          posts: response.data.posts
        });
      })
  };

  fetchSpecies = () => {
    axios.get('/api/species') // Just to test that DB layer works
      .then((response) => {
        console.log('Species: ' + response.data.species)
        this.setState({
          species: response.data.species
        });
      })
  };

  fetchWishlist = () => {
    axios.get('/api/wishlist') // Just to test that DB layer works
      .then((response) => {
        console.log('Wishlist: ' + response.data.wishlist)
        this.setState({
          wishlist: response.data.wishlist
        });
      })
  };

  componentDidMount() {
    this.fetchPlants();
    this.fetchUsers();
    this.fetchSpecies();
    this.fetchPosts();
    this.fetchWishlist();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar user={this.state.user} login={this.login} logout={this.logout} users={this.state.users} />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard plants={this.state.plants} users={this.state.users} userId={this.state.user} species={this.state.species} />} />
            <Route path='/newsfeed' element={<Newsfeed posts={this.state.posts} users={this.state.users} userId={this.state.user} fetchPosts={this.fetchPosts}/>} />
            <Route path='/profile/:user_id' element={<Profile userId={this.state.user} plants={this.state.plants} users={this.state.users} />} />
            <Route path='/plants/:plant_id' element={<Plant plants={this.state.plants} users={this.state.users} user_id={this.state.user} />} />
            <Route path='/login/:user_id' />
            <Route path='/logout' />
            <Route path='/wishlist' element={<Wishlist users={this.state.users} userId={this.state.user} wishlist={this.state.wishlist} user_plants={this.state.plants} species={this.state.species}/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
