import React, { FC, Fragment } from 'react';
import styled from "styled-components";

interface FilterProps {

};
const Button = styled.button`
  text-align: right;
  margin: 20px 10px;
  background-color: 
  border: solid;
  background: #FFD800;
  height: 30px;
  border-radius: 15px;
  text-transform: uppercase;
  padding: 15px 10px;
  font-weight: 400;
  font-size: 10px;
  cursor: cursor;
`;
export const Filter: FC<FilterProps> = () => {
  
  return (
    <Fragment>
      <Button>Filter</Button>
    </Fragment>
  );
};