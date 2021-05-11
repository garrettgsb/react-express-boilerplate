import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Content from './Components/Vegetable/VegetableBasket';
import { makeStyles } from '@material-ui/core/styles';
import VegetableAbout from './Components/Vegetable/VegetableAbout';
import VegetableBasket from './Components/Vegetable/VegetableBasket';
import Dashboard from './Components/Dashboard'

const useStyles = makeStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
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

          <Route path='/vegetables'>
            <VegetableAbout />
          </Route>

          <Route path='/'>
            <Sidebar />
            <nav className="vegetable__basket">
              {/* <VegetableBasket /> */}
            </nav>
          </Route>

        </main>
      </Switch>
    </Router>
  );
}
