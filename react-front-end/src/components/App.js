import React from 'react';
import axios from 'axios';

import Buttons from './buttons'
import CustomizedSwitches from './switches'
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from './header'
import LeftSearch from './leftsearch'
import RightTweets from './righttweets'
// import CenterMap from './centermap'
import MapContainer from './Map/Map.js'
import Paper from '@material-ui/core/Paper';
// import DeleteIcon from '@material-ui/icons/Delete';

import './App.scss';






export default function App() {


  return (
    <body className="App">
      <Header />
      {/* {Map} */}
      <MapContainer />
      <LeftSearch />
      <RightTweets />
    </body>
  );

  // return (
  //   <div>
  //     <Paper variant="outlined" square />
  //     <Buttons />
  //     <CustomizedSwitches />
  //     <CircularProgress />
  //     <CircularProgress color="secondary" />
  //     <LinearProgress />
  //     <LinearProgress color="secondary" />
  //   </div>

  // );
}
