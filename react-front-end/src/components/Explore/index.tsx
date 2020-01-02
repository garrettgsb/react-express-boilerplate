import React, { Fragment } from "react";
import styled from 'styled-components';

import { SearchBar } from "./SearchBox";
import { DatePick } from "./DatePicker";
import { DestRec } from "./DestRecommended";
import { Button } from "./Button"
type ExploreProps = {
  city: string,
  selected?: string | null,
  topRecommended: string
  // onClick: (e:React.MouseEvent) => void
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Explore: React.FC<ExploreProps> = () => {
    return (
      <Fragment>
        <SearchBar/>
        <DatePick/>
        <Button />
        <DestRec city="Van" topRecommended="Vancouver"/>
      </Fragment>
    )
}