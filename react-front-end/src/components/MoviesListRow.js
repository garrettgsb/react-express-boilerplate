import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MoviesListRow.css";
import { Link } from "react-router-dom";

const poster_baseUrl = "https://image.tmdb.org/t/p/original";

function MoviesListRow(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMoviesDataByGenre() {
      const request = await axios.get(props.genre_Url);
      setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchMoviesDataByGenre();
  }, [props.genre_Url]);

  return (
    <div className="movies_row">
      {props.title}
      <div className="movies_row_posters">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <img
              key={movie.id}
              className="movie_poster"
              src={`${poster_baseUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MoviesListRow;
