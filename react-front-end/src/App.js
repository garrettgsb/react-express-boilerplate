import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Components/Sidebar'
import Maintenance from './Components/Maintenance'
import Harvest from './Components/Harvest'
import Weather from './Components/Weather'

const useStyles = makeStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
});


export default function App() {
  
  const classes = useStyles();

    return (
      <div className="App">
        <Sidebar />
        <div className={classes.row}>
          <Maintenance />
          <Harvest />
        </div>
        <Weather />
      </div>
    );
  }

