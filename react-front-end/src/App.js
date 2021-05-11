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
    <Router>
      <Switch>
        <main className="layout">
          <Route path="/tasks">
            <div className="App">
              <div className={classes.row}>
                <Dashboard />
              </div>
            </div>
          </Route>
          <Route path='/planning'>
            <Content />
          </Route>

          <Route path='/'>
            <Sidebar />
            <nav className="vegetable__basket">
              <VegetableBasket />
            </nav>
          </Route>

        </main>
      </Switch>
    </Router>
  );
}
