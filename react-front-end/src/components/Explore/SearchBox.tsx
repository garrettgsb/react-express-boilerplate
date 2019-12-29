import React from "react";
import styled from 'styled-components';
import axios from "axios";

const Input = styled.input`
  border-radius: 5px
  height: 30px
  weight: auto
  color: red
`;

type SearchProps = { cities: string };

export default class Search extends React.Component<SearchProps, {}> {
  
  //fetch data from api from destinations

  // const initialState = {
  //   loading: true,
  //   cities: []
  // };

  // useEffect(() => {
  //   axios.get(``)
  // });

  render() {
    return (
      <div className="SearchBar">
        <label className="search-label" htmlFor="search-input">
          <Input
              type="text"
              value=""
              id="search-input"
              placeholder="Please enter your destination"
          />
        </label>
      </div>
    )
  }

}


