import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import VegetableAbout from './Components/Vegetable/VegetableAbout';
import VegetableBasket from './Components/Vegetable/VegetableBasket';
import Dashboard from './Components/Dashboard'
import Vegetables from './Components/Vegetables'

const useStyles = makeStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    justifyContent: "center",
    spacing: 4,
  }
});

export default function App() {
  const classes = useStyles();


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
           <Vegetables/>
           <VegetableBasket/>
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
