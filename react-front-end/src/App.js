import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';
import Sidebar from './Components/Sidebar';
import Content from './Components/VegetableBasket';
import { makeStyles } from '@material-ui/core/styles';
// import VegetableBasket from './Components/VegetableBasket';
import Dashboard from './Components/Dashboard'

const useStyles = makeStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
});

export default function App() {
  const classes = useStyles();
  const cityId = 6173331;

  return (
    <main>
      <section className="App">
        <Sidebar />
        </section>
        <section>
          <Dashboard />
        </section>
        <section >
          <Content />
        </section>
    </main>
  );
}
