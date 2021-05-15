import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import VegetableAbout from './Components/Vegetable/VegetableAbout';
import Dashboard from './Components/Dashboard'
import Vegetables from './Components/Vegetables'
import VegetableDrawer from './Components/VegetableDrawer';

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
    <Switch>
        <Router>
        <main className="layout">
          <Route path="/tasks/:id" >
            <div className="App">
              <div className={classes.row}>
                <Dashboard />
              </div>
            </div>
          </Route>
          <Route path='/planning'>
           <Vegetables/>
           <VegetableDrawer/>
          </Route>

          <Route path='/vegetables'>
            <VegetableAbout />
          </Route>

          <Route path='/'>
            <Sidebar />
            <nav> 
            </nav>
          </Route>

        </main>
      </Router>
    </Switch>
  );
}
