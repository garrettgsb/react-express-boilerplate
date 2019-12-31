import React, {FC, useState} from "react";
import styled from 'styled-components';
import axios from "axios";
import PropTypes from 'prop-types';

const Input = styled.input`
  border-radius: 5px
  height: 30px
  weight: auto
  color: red
`;

interface SearchProps {
};


export const SearchBar: FC<SearchProps> = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="SearchBar">
      <label className="search-label" htmlFor="search-input">
        <Input
            type="text"
            id="search-input"
            placeholder="Please enter your destination"
            onChange ={e => setSearch(e.target.value)}
            value = {search}
        />
      </label>
    </div>
  );
};

