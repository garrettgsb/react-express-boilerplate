import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.css';
import { TripsIndex } from './components/mytrips/index';
import styled from 'styled-components';
import { LoginInForm } from './components/auth/LoginInForm';
import { Profile } from './components/profile/profile';

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 0px;
`;

import { Explore } from "./components/explore";
const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;

const NavDiv = styled.nav`
  position: fixed;
  bottom: 0px;
  width: 99%;
  z-index: 999;
  background: #F4F4F9;
  border: 1px solid #000;
  margin: 1px 1px 0px 1px;
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
          <li><NavItem to='/explore' activeStyle={{ fontWeight: 'bold' }}>Explore</NavItem></li>
          <li><NavItem to='/trips' activeStyle={{ fontWeight: 'bold' }}>My Trips</NavItem></li>
          <li><NavItem to='/profile' activeStyle={{ fontWeight: 'bold' }}>Profile</NavItem></li>
        </NavList>
      </NavDiv>

      <Switch>
        <Route exact path='/'>
          <LoginInForm />
        </Route>
        <Route path='/explore'>
          <Explore
            city='Van'
            topRecommended="Vancouver"
            selected=''
          // handleChange={e => e.target.value}
          />
        </Route>
        <Route exact path='/trips'>
          <TripsIndex />
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
