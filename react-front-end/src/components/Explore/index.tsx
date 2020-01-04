import React, { Fragment } from "react";
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
      <Fragment>
        <SearchBar/>
        <DestRec city="Van" topRecommended="Vancouver"/>
        <Swipe/>
      </Fragment>
    )
}