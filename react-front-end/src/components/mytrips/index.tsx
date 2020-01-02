import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { CityList } from './CityList';
import { AttractionList } from './AttractionList';


export const TripsIndex = () => {

  return (
    <>
    <Router>
      <Switch>
        <Route path='/trips'><CityList cities="cities" /></Route>
      </Switch>
      <Switch>
        <Route path='/trips/vancouver'><AttractionList city="city" attractions="attractions" /></Route>
      </Switch>
    </Router>

    </>
  )
}