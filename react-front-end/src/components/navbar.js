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
    <nav className="navbar navbar-light bg-light">
      <div className="navbar_title">Cineflix</div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/home" className="btn btn-light">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="btn btn-light">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <a href="/login" className="btn btn-light">
            Login
          </a>
        </li>
        {props.loggedIn && (
          <li className="nav-item">
            <Link to="/my_watchlist" className="btn btn-light">
              My Watchlist
            </Link>
          </li>
        )}
      </ul>
      <div className="navbar_dropdown">
        <select onChange={handleChange}>
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
          <input placeholder="Search" onChange={handleSearch}></input>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
