import React, { useEffect, useState } from "react";
import tmdb_api_requests from "../TMDB_API_Requests";
import axios from "axios";
import "./Navbar.css";

import { createSearchParams, useNavigate, Link } from "react-router-dom";

const Navbar = (props) => {
  const [genres, setGenres] = useState([]);
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMoviesDataByGenre() {
      const request = await axios.get(tmdb_api_requests.genre_list);
      setGenres(request.data.genres);
      return request;
    }
    fetchMoviesDataByGenre();
  }, []);

  const handleChange = (event) => {
    let id = getId(event.target.value);

    navigate({
      pathname: "/genre",
      search: `?${createSearchParams({ name: event.target.value, id: id })}`,
    });
  };

  const handleSearch = (event) => {
    console.log("this is searchevent" + event.target.value);
    setSearchString(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    console.log("this is search string: " + searchString);
    event.preventDefault();
    navigate({
      pathname: "/search",
      search: `?${createSearchParams({ query: searchString })}`,
    });
  };

  const getId = (name) => {
    let result = 0;
    genres.forEach((genre) => {
      if (genre.name === name) {
        result = genre.id;
      }
    });
    return result;
  };

  return (
    <nav className="nav">
      <Link className="logo" to="/" style={{ textDecoration: "none" }}>
        <span>CINEFLIX</span>
      </Link>
      <div className="navbar__left__items">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span> Home </span>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <span>Register</span>
        </Link>

        <Link href="/login" style={{ textDecoration: "none" }}>
          <span> Login</span>
        </Link>

        {props.loggedIn && (
          <Link to="/my_watchlist" style={{ textDecoration: "none" }}>
            <span> My Watchlist</span>
          </Link>
        )}
      </div>
      <div className="navbar__right__items">
        <div className="navbar_dropdown">
          <select onChange={handleChange} className="select_genre">
            <option selected="selected">Choose a genre</option>
            {genres.map((genre) => (
              <option value={genre.name} id={genre.id} key={genre.id}>
                {" "}
                {genre.name}{" "}
              </option>
            ))}
          </select>
        </div>
        <div className="search-bar">
          <form onSubmit={handleSearchSubmit}>
            <input
              className="search_box"
              placeholder="Search"
              onChange={handleSearch}
            ></input>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
