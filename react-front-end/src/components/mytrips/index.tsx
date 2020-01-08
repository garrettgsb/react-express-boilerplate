import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { CityList } from './CityList';
import { Trip } from './Trip';
import axios from 'axios';

export const TripsIndex = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/api/trips')
    ])
    .then((res) => {
      setTrips(res[0].data)
    })
  }, [])

  return (
    <>
    <Switch>
      <Route exact path='/trips'><CityList cities={trips} /></Route>
      <Route exact path='/trips/:id'><Trip /></Route>
    </Switch>
    </>
  )
}