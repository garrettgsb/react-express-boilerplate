import React, { Fragment } from "react";
import styled from 'styled-components';

import Search from "./SearchBox";
import DatePick from "./DatePick";

type ExploreProps = { message: string, date: string };

export default class Explore extends React.Component<ExploreProps, {}> {
  
  render() {
    return (
      <Fragment>

        <Search message='testing searchbox'/>
        <DatePick date="2019-12-28"/>
      </Fragment>
    )
  }
}