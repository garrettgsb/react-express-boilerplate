import React from 'react';
import axios from 'axios';

// import Buttons from './Buttons'
// import CustomizedSwitches from './Switches'
// import CircularProgress from '@material-ui/core/CircularProgress';
// import LinearProgress from '@material-ui/core/LinearProgress';
import Header from './Header'
import LeftSearch from './LeftSearch'
import RightTweets from './RightTweets'
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
