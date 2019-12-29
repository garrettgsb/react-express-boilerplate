import React, { Fragment } from "react";
import styled from 'styled-components';

import Search from "./SearchBox";
import DatePicker from "./DatePick";
import DestRecommended from "./DestRecommended";
type ExploreProps = { cities: string, selected: string, date: string, topRecommended: string };

export default class Explore extends React.Component<ExploreProps, {}> {
  render() {
    return (
      <Fragment>
        <Search cities='testing searchbox'/>
        <DatePicker date='2019-12-30' selected="2019-12-28"/>
        <DestRecommended topRecommended="Vancouver"/>
      </Fragment>
    )
  }
}