import React, { useEffect, useState } from "react";
import tmdb_api_requests from "../TMDB_API_Requests";
import axios from "axios";
import "./Navbar.css";

import { createSearchParams, useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMoviesDataByGenre() {
      const request = await axios.get(tmdb_api_requests.genre_list);
      console.log('genres fetched:');
      console.log(request.data.genres);
      setGenres(request.data.genres)
      return request;
    }
    fetchMoviesDataByGenre();
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    let id = getId(event.target.value)
    console.log(id)

    navigate({
      pathname: '/genre',
      search: `?${createSearchParams({name: event.target.value, id: id})}`,
    })
  };

  const getId = (name) => {
    let result = 0;
    genres.forEach((genre) => {
      if (genre.name === name) {
        result = genre.id;
      }
    })
    return result;
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar_title">
        Cineflix
      </div>
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
        <li className="nav-item">
          <a href="/contact" className="btn btn-light">
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar_dropdown">
        <select onChange={handleChange}>
          <option selected="selected">Choose a genre</option>
          {genres.map((genre) => (
            <option value={genre.name} id={genre.id}> {genre.name} </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
