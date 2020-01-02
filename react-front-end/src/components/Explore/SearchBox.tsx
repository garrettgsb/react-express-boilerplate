import React, {FC, useState} from "react";
import styled from 'styled-components';
import axios from "axios";
import PropTypes from 'prop-types';

const Input = styled.input`
  border-radius: 5px
  height: 30px
  weight: auto
  color: black
`;

interface SearchProps {
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar: FC<SearchProps> = ({handleInputChange}) => {
  
  const [search, setSearch] = useState('');
  handleInputChange = (e) => {
    setSearch(e.target.value)
  }
  console.log(search);
  axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${search}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyAZYMLE44Nb9OiKx8ZSOn8ULBuni72yNL8`)
  return (
    <div className="SearchBar">
      <label className="search-label" htmlFor="search-input">
        <Input
            type="text"
            id="search-input"
            placeholder="Please enter your destination"
            onChange ={handleInputChange}
            value = {search}
        />
      </label>
    </div>
  );
  
};

