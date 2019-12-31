import React from "react";
import styled from 'styled-components';


type DestRecProps = { city: string, topRecommended: string };

export default class DestRec extends React.Component<DestRecProps, {}> {
  
  render() {
    return (
      <h3>Check {this.props.topRecommended}</h3>
    )
  }

}