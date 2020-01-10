import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';

import { SearchBar } from "./SearchBox";
import { DestRec } from "./DestRecommended";
import { Swipe } from "./swipe";
type ExploreProps = {
  cityName: string | null,
  selected?: string | null,
  topRecommended: string,
  search?: any
  
  // style?: React.CSSProperties | undefined
};

const Header = styled.h2`
  top: 30px;
`

export const Explore: React.FC<ExploreProps> = () => {
  
    return (
      <Router>
        <Header>Where do you travel to next?</Header>
        <Switch>
          <Route exact path='/explore'>
            <SearchBar />
            <DestRec cityName="Van" topRecommended="Vancouver"/>
          </Route>
          <Route exact path={`/explore/:itinerariesId`} render={({match}) => (
          <Swipe itinerariesId ={match.params.itinerariesId}/>)}/>
          
            {/* <Swipe/> */}
          {/* </Route> */}
        </Switch>

      </Router>
    )
}
