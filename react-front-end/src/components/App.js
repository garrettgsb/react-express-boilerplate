import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import LeftData from './LeftDatas/LeftData'
import RightTweets from './RightTweets/RightTweets'

import MapContainer from './Map/Map.js'
import Fab from "@material-ui/core/Fab";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import io from "socket.io-client";

import './App.scss';
import { Animated } from "react-animated-css";

export default function App() {

  // keep track of state of left and right containers
  const [state, setState] = useState({
    left: false,//is container open or closed
    right: false
  })

  const [response, setResponse] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [hashtag, setHashtag] = useState('');
  const [socket, setSocket] = useState();
  // const socket = io("http://localhost:8080/");

//at the start of launching app, we want to run socket.io
// within that socket function we update setTweets

  const appendTweets = async (tweet) => {
    console.log("before tweets length ", tweets.length);
    console.log(tweet.text);
    setTweets((prevTweets) => [tweet, ...prevTweets]);
    console.log("New tweets length ", tweets.length);
  }

  useEffect(() => {
    // setSocket();
    let socket = io('http://localhost:8080/')
    setSocket(socket);
    socket.emit('start', '#apecave');
    socket.on('tweet', async (tweet) => {
      console.log("Inside Asynce useEffect2");
      console.log("Tweet length from useEffect2", tweets.length);
      await appendTweets(tweet)
    })
    return () => {
      console.log('Disconnecting from socket');
      socket.disconnect()
    };
  }, []);

  // useEffect(() => {
  //   console.log('Rerendering');
  //   console.log("tweet array size from useEffect2, ", tweets.length);
  //   // setTweets(tweets);
  // }, [tweets])

  // const toggleLeft = () => setState({ ...state, left: !state.left });
  const toggleLeft = () => {
    console.log('1st', state)
    setState(prev => ({...prev, left: !state.left}))
    console.log(state)
}
  const toggleRight = () => {
    console.log('1st', state)
    setState(prev => ({...prev, right: !state.right}))
    console.log(state)
}


return (
  <div className="App">
    <MapContainer />

//left container
    <Fab className='data-icon' onClick={toggleLeft}>
      <EqualizerOutlinedIcon className='icon' />
    </Fab>
    <Animated
    animationInDuration={400}
    animationOutDuration={400}
      isVisible={state.left}>
    <LeftData />
    </Animated>

//right container
    <Fab className='tweet-icon' onClick={toggleRight}>
      <ChatOutlinedIcon className='icon' />
    </Fab>
    <Animated
    animationInDuration={400}
    animationOutDuration={400}
      isVisible={state.right}>
      <RightTweets tweets={tweets}/>
    </Animated>
  </div>
);
}
