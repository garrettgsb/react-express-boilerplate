import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/search">
            <h1>Search Route!</h1>
          </Route>
          <Route path="/bookings">
            <h1>Bookings Route!</h1>
          </Route>
          <Route path="/listings">
            <h1>Listings Route!</h1>
          </Route>
          <Route path="/profile">
            <h1>Profile Route!</h1>
          </Route>
          {/* <Route path="/products" component={Products} /> */}
          { /* you can specify that a route must match specifically with the exact attribute */ }
          {/* <Route path="/" exact component={Home} /> */}
        </Switch>

        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction component={Link} to="/search" label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction component={Link} to="/bookings" label="Bookings" icon={<ListIcon />} />
          <BottomNavigationAction component={Link} to="/listings" label="Listings" icon={<ListIcon />} />
          <BottomNavigationAction component={Link} to="/profile" label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Router>
    </>
  );
}

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
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>
        <SimpleBottomNavigation />        
      </div>
    );
  }
}

export default App;
