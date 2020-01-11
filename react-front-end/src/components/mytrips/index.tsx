import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { CityList } from './CityList';
import { Trip } from './Trip';
import {Invite} from './Invite';

export const TripsIndex = () => {

  return (
    <>
    <Switch>
      <Route exact path='/trips'><CityList /></Route>
      <Route path='/trips/:id'><Trip /></Route>
    </Switch>
    </>
  )
}