import React from "react";
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 5px
  height: 30px
  weight: auto
  color: red
`;

type DatePickProps = { date: string };

export default class DatePick extends React.Component<DatePickProps, {}> {
  
  render() {
    return (
      <h3>Check {this.props.date}</h3>
    )
  }
}