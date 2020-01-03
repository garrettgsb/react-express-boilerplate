import React, { Fragment } from "react";
import styled from 'styled-components';

import { SearchBar } from "./SearchBox";
import { DestRec } from "./DestRecommended";
type ExploreProps = {
  city: string,
  selected?: string | null,
  topRecommended: string
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Explore: React.FC<ExploreProps> = () => {
    return (
      <Fragment>
        <SearchBar/>
        <DestRec city="Van" topRecommended="Vancouver"/>
      </Fragment>
    )
}