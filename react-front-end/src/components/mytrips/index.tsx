import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { CityList } from './CityList';
import { AttractionList } from './AttractionList';


export const TripsIndex = () => {

  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/trips'><CityList cities="cities" /></Route>
        <Route exact path='/trips/vancouver'><AttractionList city="Vancouver" attractions="attractions" /></Route>
      </Switch>
    </Router>

    </>
  )
}