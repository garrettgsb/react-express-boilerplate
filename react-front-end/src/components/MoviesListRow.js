import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MoviesListRow.css";
import { Link } from "react-router-dom";
import AddWatchlist from "./AddWatchlist";
import RemoveWatchlist from "./RemoveWatchlist";

const poster_baseUrl = "https://image.tmdb.org/t/p/original";

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

  const isMovieAddedToWatchlist = function (movie) {
    if (props.watchlist) return props.watchlist.includes(movie);
    return false;
  };

  return (
    <div className="movies_row">
      {props.title}
      <div className="movies_row_posters">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "white" }}
            state={{ genre_url: `${props.genre_Url}` }}
          >
            <div className="movie_card">
              <img
                className="movie_card_img"
                src={`${poster_baseUrl}${movie.poster_path}`}
                alt={movie.name}
              />
              <div className="movie_card_overlay">
                <div className="movie_card_title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="movie_card_runtime">
                  {movie ? movie.release_date : ""}
                  <span className="movie_card_rating">
                    {movie ? movie.vote_average : ""}
                    <i class="bi bi-star-fill vote_star"></i>
                  </span>
                </div>
                <div className="movie_card_description">
                  {movie ? movie.overview.slice(0, 120) + "..." : ""}
                </div>
                {props.isLoggedIn && (
                  <div className="overlay_watchlist">
                    {isMovieAddedToWatchlist(movie) ? (
                      <RemoveWatchlist
                        onClick={() => props.handleRemoveWatchlistClick(movie)}
                      />
                    ) : (
                      <AddWatchlist
                        onClick={() => props.handleAddWatchlistClick(movie)}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MoviesListRow;
