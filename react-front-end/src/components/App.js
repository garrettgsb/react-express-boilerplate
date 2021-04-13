import React, { useState } from 'react';
// import axios from 'axios';

import LeftSearch from './LeftSearch'
import RightTweets from './RightTweets/RightTweets'

import MapContainer from './Map/Map.js'
import Fab from "@material-ui/core/Fab";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';


// import Buttons from './Buttons'
// import CustomizedSwitches from './Switches'
// import CircularProgress from '@material-ui/core/CircularProgress';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import Header from './Header.js'
// import Paper from '@material-ui/core/Paper';
// import DeleteIcon from '@material-ui/icons/Delete';

import './App.scss';






export default function App() {

  //keep track of state of left and right containers
  const [state, setState] = useState({
    left: false,
    right: false
  })

  // const showData = 

  return (
    <div className="App">
      <MapContainer />
      <Fab className='data-icon'>
        <EqualizerOutlinedIcon  className='icon'/>
      </Fab>
      <Fab className='tweet-icon'>
        <ChatOutlinedIcon className='icon' />
      </Fab>
      {/* <Drawer  */}
      <LeftSearch />
      <RightTweets />
    </div>
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
