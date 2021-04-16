import React, { useState, useContext } from 'react';
import { authContext } from './AuthProvider';
// import axios from 'axios';
import Meetups from './components/Meetups/index.jsx';
import Forecast from './components/Forecast/index.jsx';
import Profile from './components/Profile/index.jsx';
import UserLogin from './components/UserLogin/UserLogin.jsx';
import UserInfo from './components/UserInfo/UserInfo.jsx';
import Settings from './components/Settings/index.jsx';
import Navbar from './components/Navbar/Navbar'
import './App.scss';
import './components/Button.scss';
import {BrowserRouter,Route,Switch} from 'react-router-dom';



function App() {

  // We can use this because we even wrapped <App> in our Provider (in index.js)
  const { auth } = useContext(authContext);
  
  // const constructor = (props) => {
    //   super(props)
  //   this.state = {
    //     message: 'Click the button to load data!'
  //   }
  // }

  // fetchData = () => {
    //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
    //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
    //       message: response.data.message
  //     });
  //   }) 
  // }

    return (
      <div className="app">
        <BrowserRouter>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Forecast}/>
              <Route exact path="/meetups" component={Meetups}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/settings" component={Settings}/>
              {!auth && <Route exact path="/login" component={UserLogin}/>}
              {auth && <Route exact path="/login" component={UserInfo}/>}
            </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
