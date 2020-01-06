import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';

import { SearchBar } from "./SearchBox";
import { DestRec } from "./DestRecommended";
import { Swipe } from "./swipe";
type ExploreProps = {
  city: string,
  selected?: string | null,
  topRecommended: string
};

export const Explore: React.FC<ExploreProps> = () => {
    return (
      <Router>
        <Switch>
          <Route exact path='/explore'><SearchBar/></Route>
          <DestRec city="Van" topRecommended="Vancouver"/>
          <Route exact path='/explore/:city' component={Swipe}><Swipe/></Route>
        </Switch>

      </Router>
    )
}
