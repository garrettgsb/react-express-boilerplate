import React, { FC, Fragment, useState } from 'react';
import styled from "styled-components";

interface FilterProps {
  attractions: Array<any>;
  handleFilter?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // checked?: boolean;
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
const FilterTab = styled.div`
  display: grid;
`;
const Input = styled.input`
`;
export const Filter: FC<FilterProps> = ({ attractions, handleFilter }) => {
  
  // const filters = ["SCENERY", "SHOPPING", "RESTAURANTS/COFFEE SHOPS", "TRAILS", "MUSEUM"];
  const [filter, setFilter] = useState<Array<any>>([]);
  const [checked, setChecked] = useState<Boolean>(false);

  handleFilter = (e) => {
    // const item = e.target.name;
    // const isChecked = e.target.checked;

    // setFilter(item)
    console.log(filter);
  }
  
  return (
    <Fragment>
      <Button>Filter</Button>
      <FilterTab>
          {/* {filters.map(filter => {
            <ul>
            <Input
              type="checkbox"
              name={`${filter}`}
              onClick={handleFilter}
            />{filter}
            </ul>
          })} */}
        {/* <Input
          type="checkbox"
          name="SCENERY"
          checked={setChecked}
          onChange={handleFilter}
          />Scenery
        <Input
          type="checkbox"
          name="SHOPPING"
          checked={checked}
          onChange={handleFilter}
          />Shopping
        <Input
          type="checkbox"
          name="RESTAURANTS/COFFEE SHOPS"
          checked={checked}
          onChange={handleFilter}
          />Restaurants/Coffee Shops
        <Input
          type="checkbox"
          name="TRAILS"
          checked={checked}
          onChange={handleFilter}
          />Trails
        <Input
          type="checkbox"
          name="MUSEUM"
          checked={checked}
          onChange={handleFilter}
          />Museums  */}
      </FilterTab>
    </Fragment>
  );
};