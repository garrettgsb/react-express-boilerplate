import React, { useContext, useState, useEffect } from 'react';
import { authContext } from './AuthProvider';
// import axios from 'axios';
import Meetups from './components/Meetups/index.jsx';
import Maps from './components/Maps/index.jsx';
import Forecast from './components/Forecast/index.jsx';
import Profile from './components/Profile/Profile.jsx';
import UserLogin from './components/UserLogin/UserLogin.jsx';
import UserInfo from './components/UserInfo/UserInfo.jsx';
import Settings from './components/Settings/index.jsx';
import Navbar from './components/Navbar/Navbar'
import './styles/App.scss';
import './styles/components/_button.scss';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ArcticLandscape from './components/LandingPage/LandingPage';



function App() {

  const [loading, setLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3200)
  }, [])
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
      <>
      {loading === false ? (
        <BrowserRouter>
      <div className="app">
          <Navbar />

            <Switch>
              <Route exact path="/" component={Forecast}/>
              <Route exact path="/meetups" component={Meetups}/>
              <Route exact path="/maps" component={Maps}/>
              <Route exact path="/profile/:id" component={Profile}/>
              <Route exact path="/settings" component={Settings}/>
              {!auth && <Route exact path="/login" component={UserLogin}/>}
              {auth && <Route exact path="/login" component={UserInfo}/>}
            </Switch>
      </div>
        </BrowserRouter> 
        ) : (
          <>
          <BrowserRouter>
            <Navbar />
            <ArcticLandscape className='focus' />
            </BrowserRouter>
          </>
        )}
        </>
    );
}

export default App;
