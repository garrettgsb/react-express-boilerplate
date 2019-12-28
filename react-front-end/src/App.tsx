import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import axios from 'axios';
import './App.css';
import { CityList } from './components/mytrips/CityList';
import styled from 'styled-components';

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 0px;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;

const NavDiv = styled.nav`
  position: fixed;
  bottom: 0px;
  width: 99%;
  z-index: 999;
  border: 1px solid #000;
  margin: 1px;
`;

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
        <NavDiv>
          <NavList>
            <li><NavItem to='/explore' activeStyle={{fontWeight: 'bold'}}>Explore</NavItem></li>
            <li><NavItem to='/trips' activeStyle={{fontWeight: 'bold'}}>My Trips</NavItem></li>
            <li><NavItem to='/profile' activeStyle={{fontWeight: 'bold'}}>Profile</NavItem></li>
          </NavList>
        </NavDiv>

        <Switch>
          <Route path='/login'>
            log in from App.js
          </Route>

          <Route path='/trips'>
            <CityList city="city" />
          </Route>
        </Switch>
      </Router>
    )
  }
// }


// export default App;
