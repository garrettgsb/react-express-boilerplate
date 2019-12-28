import React from "react";
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 5px
  height: 20px
  weight: auto
  color: red
`;

type SearchProps = { message: string };

export class Search extends React.Component<SearchProps, {}> {
  
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