import React, { Fragment } from "react";
import styled from 'styled-components';

import { SearchBar } from "./SearchBox";
import { DatePick } from "./DatePick";
import DestRecommended from "./DestRecommended";
type ExploreProps = {
  city: string,
  selected?: string | null,
  topRecommended: string
  // e: string
  // onChangeText?: Function;
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// export default class Explore extends React.Component<ExploreProps, {}> {
export const Explore: React.FC<ExploreProps> = () => {
  // render() {
    return (
      <Fragment>
        <SearchBar />
        <DatePick/>
        <DestRecommended city="Van" topRecommended="Vancouver"/>
      </Fragment>
    )
  // }
}