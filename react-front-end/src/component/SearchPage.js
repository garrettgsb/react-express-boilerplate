import React, { createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function SearchBar(props) {
  const [searchInputValue, setSearchInputValue] = React.useState("");
  const searchContext = createContext();
  const [searchReturnValue, setSearchReturnValue] = React.useState({});

  const history = useHistory();

  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.filteredSearch(searchInputValue);
          history.push("/searchResults");
        }}
      >
        <input
          style={BarStyling}
          key="random1"
          value={searchInputValue}
          placeholder={"search"}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
        <button type="submit">Submit Search</button>
      </form>
    </div>
  );
}
