import React from "react";
import axios from "axios";

export default function SearchBar({ keyword, setKeyword }) {
  const [searchInputValue, setSearchInputValue] = React.useState("");
  // const [searchReturnValue, setSearchReturnValue] = React.useState({});

  // const searchInputChange = (event) => {
  //   // /api/search?test=2
  //   console.log("Hello, I'm from onChange : ", event.target.value);
  //   setSearchInputValue(event.target.value);
  // };

  const filteredSearch = (queryString) => {
    console.log("queryString = ", queryString);
    axios.get(`/api/search?query=${queryString}`);
  };

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
          filteredSearch(searchInputValue);
        }}
      >
        <input
          style={BarStyling}
          key="random1"
          value={searchInputValue}
          placeholder={"search"}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
        <button
          type="submit"
          // onSubmit={(event) => {
          //   filteredSearch(searchInputValue);
          // }}
        >
          Submit Search
        </button>
      </form>
    </div>
  );
}
