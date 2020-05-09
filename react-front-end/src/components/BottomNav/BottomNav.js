import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LinkButtons from './LinkButtons';

import Search from '../Search/Search';
import Listings from '../Listings/Listings';
import Profile from '../Profile/Profile';
import Bookings from '../Bookings/Bookings';

export default function BottomNav() {

  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/bookings">
          <Bookings />
        </Route>
        <Route path="/listings">
          <Listings />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <LinkButtons />
    </Router>
  );
};