import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MoviesListRow.css";
import MovieCard from "./MovieCard";

function MoviesListRow(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMoviesDataByGenre() {
      const request = await axios.get(props.genre_Url);
      setMovies(request.data.results);
      return request;
    }
    fetchMoviesDataByGenre();
  }, [props.genre_Url]);

  useEffect(() => {
    if (props.movieToExclude) {
      setMovies(movies.filter((x) => x.id !== props.movieToExclude));
    }
  }, [props.movieToExclude]);

  return (
    <div className="movies_row">
      {props.title}
      <div className="movies_row_posters">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
            isLoggedIn={props.isLoggedIn}
            handleAddWatchlistClick={props.handleAddWatchlistClick}
            handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
            genre_Url={props.genre_Url}
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesListRow;
