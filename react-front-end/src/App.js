import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Content from './Components/VegetableBasket';
import { makeStyles } from '@material-ui/core/styles';
import VegetableBasket from './Components/VegetableBasket';
import Maintenance from './Components/Maintenance'
import Harvest from './Components/Harvest'
import Weather from './Components/Weather'
import VegetableCard from './Components/VegetableCard';
import Vegetables from './Components/Vegetables';


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
    <Router>
      <Switch>
      <main 
      className="layout">

     

      <Route path="/tasks">
        <div className="App">
          <div className={classes.row}>
            <Maintenance />
            <Harvest />
          </div>
          <Weather />
        </div>
      </Route>

      <Route path='/planning'>
          <VegetableCard />
          <Vegetables/>
      </Route>

      <Route path='/'>
        <Sidebar />
        <nav className="vegetable__basket">
          <VegetableBasket/>
        </nav>
      </Route>
      
      </main>
      </Switch>
    </Router>
    );
  }


