import React, { useContext, useState, useEffect } from 'react';
import { authContext } from './AuthProvider';
// import axios from 'axios';
import Meetups from './components/Meetups/index.jsx';
import Maps from './components/Maps/index.jsx';
import Forecast from './components/Forecast/index.jsx';
import Profile from './components/Profile/Profile.jsx';
import PhotogsProfile from './components/Meetups/PhotogsProfile.jsx';
import UserLogin from './components/UserLogin/UserLogin.jsx';
import UserInfo from './components/UserInfo/UserInfo.jsx';
import About from './components/About';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import './styles/App.scss';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ArcticLandscape from './components/LandingPage/LandingPage';




function App() {

  const [loading, setLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3200)
  }, [])

  // We can use this because we even wrapped <App> in our Provider (in index.js)
  const { auth } = useContext(authContext);
  
    return (
      <>
      {loading === false ? (
        <BrowserRouter>
      <div className="app">
          <Navbar />

            <Switch>
              <Route exact path="/" component={ArcticLandscape} />
              <Route exact path="/forecast" component={Forecast}/>
              <Route exact path="/meetups" component={Meetups}/>
              <Route exact path="/maps" component={Maps}/>
              <Route exact path="/profile/:id" component={Profile}/>
              <Route exact path="/photogs/:id" component={PhotogsProfile}/>
              <Route exact path="/about" component={About}/>
              {!auth && <Route exact path="/login" component={UserLogin}/>}
              {auth && <Route exact path="/login" component={UserInfo}/>}
            </Switch>
          <Footer />
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
