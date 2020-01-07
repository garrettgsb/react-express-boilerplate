import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';

import { SearchBar } from "./SearchBox";
import { DestRec } from "./DestRecommended";
import { Swipe } from "./swipe";
type ExploreProps = {
  city: string,
  selected?: string | null,
  topRecommended: string,
};

export const Explore: React.FC<ExploreProps> = () => {
  const [city,setCity] = useState<string | null>('');


  console.log('check data received >>', city);
    return (
      <Router>
        <Switch>
          <Route exact path='/explore'>
            <SearchBar />
            <DestRec city="Van" topRecommended="Vancouver"/>
          </Route>
          <Route exact path={`/explore/:city`}>
            <Swipe/>
          </Route>
        </Switch>

      </Router>
    )
}
