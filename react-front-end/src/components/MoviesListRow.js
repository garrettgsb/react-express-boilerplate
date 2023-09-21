import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MoviesListRow.css";

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
          <img
            key={movie.id}
            className="movie_poster"
            src={`${poster_baseUrl}${movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesListRow;
