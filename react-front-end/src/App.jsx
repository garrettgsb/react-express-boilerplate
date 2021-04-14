import React, { useState } from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Forecast from './components/Forecast.jsx';
import Meetups from './components/Meetups/index.jsx';
import Forecast from './components/Forecast/index.jsx';
import Profile from './components/Profile/index.jsx';
import Login from './components/Login/index.jsx';
import Settings from './components/Settings/index.jsx';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import './components/Button.scss';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';


function App() {
  //use token to set login state and add conditional to display login if token is falsey
  // const [token, setToken] = useState();

  // if(!token) {
  //   return(
  //     <BrowserRouter>
  //       <>
  //         <Navbar />
  //         <Login setToken={setToken} />
  //       </>
  //     </BrowserRouter>
  //   )
  // }


  
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
              <Route exact path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
