import React, { useEffect, useState } from "react";
import tmdb_api_requests from "../TMDB_API_Requests";
import axios from "axios";
import "./Navbar.css";
import { createSearchParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Import the useAuth hook


const Navbar = (props) => {
  const [genres, setGenres] = useState([]);
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  const { isLoggedIn, authUserData , logout} = useAuth();



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
    setSearchString(event.target.value);
  };

  const handleSearchSubmit = (event) => {
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

  console.log(authUserData, "authUserData")
   
  return isLoggedIn ? (
    <nav className="nav">
      <Link className="logo" to="/" style={{ textDecoration: "none" }}>
        <span>CINEFLIX</span>
      </Link>
      <div className="navbar__left__items">
      <span>Hello! {authUserData.name}</span>

        {props.loggedIn && (
          <Link to="/my_watchlist" style={{ textDecoration: "none" }}>
            <span> My Watchlist</span>
          </Link>
        )}
      </div>
      <div className="navbar__right__items">
        <div className="navbar_dropdown">
          <select onChange={handleChange} className="select_genre">
            <option selected="selected">Filter by Genre</option>
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
              placeholder="Search..."
              onChange={handleSearch}
            ></input>
          </form>
        </div>
      </div>
      <button onClick={logout} class = "btn btn-warning"> Log Out</button>
    </nav>
  ) :
  (<nav className="nav">
  <Link className="logo" to="/" style={{ textDecoration: "none" }}>
    <span>CINEFLIX</span>
  </Link>
  <div className="navbar__left__items">
    <Link to="/register" style={{ textDecoration: "none" }}>
      <span>Register</span>
    </Link>

    <Link to="/login" style={{ textDecoration: "none" }}>
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
        <option selected="selected">Filter by Genre</option>
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
          placeholder="Search..."
          onChange={handleSearch}
        ></input>
      </form>
    </div>
  </div>
  <div></div>
</nav>)
};

export default Navbar;
