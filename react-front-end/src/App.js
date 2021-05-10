import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';
import Sidebar from './Components/Sidebar';
import Content from './Components/VegetableBasket';
import { makeStyles } from '@material-ui/core/styles';
// import VegetableBasket from './Components/VegetableBasket';
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

    <main className="layout">
      <section className="App">
        <Sidebar />
        <section className={classes.row}>
          <Maintenance />
          <Harvest />
        </section>
        <Weather />
      </section>
      <section >
        <Content />
      </section>
    </main>
  );
}

