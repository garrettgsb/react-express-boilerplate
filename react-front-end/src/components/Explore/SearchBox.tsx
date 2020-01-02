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
  axios.defaults.baseURL = 'https://maps.googleapis.com'
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.get(`/maps/api/place/findplacefromtext/json?input=${search}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${process.env.GOOGLE_API_KEY}`)
  .then(results => console.log(results))

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

