import React from "react";
import "./MovieCard.css";
import AddWatchlist from "./AddWatchlist";
import RemoveWatchlist from "./RemoveWatchlist";
import { useNavigate } from "react-router-dom";

const poster_baseUrl = "https://image.tmdb.org/t/p/original";

function MovieCard(props) {
  const navigate = useNavigate();
  const movie = props.movie;

  const handleMovieCardClick = function (event, movie) {
    let classList = Array.from(event.target.classList);
    if (classList.includes("add_watchlist")) {
      //call to add to watchlist
      props.handleAddWatchlistClick(movie);
    } else if (classList.includes("remove_watchlist")) {
      //call to remove from watchlist
      props.handleRemoveWatchlistClick(movie);
    } else {
      //navigate to movie details page
      navigate(`/movie/${movie.id}`, {
        state: { genre_url: `${props.genre_Url}` },
      });
    }
  };

  return (
    <div
      key={movie.id}
      className="movie_card"
      onClick={(event) => handleMovieCardClick(event, movie)}
    >
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
            <i className="bi bi-star-fill vote_star"></i>
          </span>
        </div>
        <div className="movie_card_description">
          {movie ? movie.overview.slice(0, 120) + "..." : ""}
        </div>
        {props.isLoggedIn && (
          <div className="overlay_watchlist">
            {props.isMovieAddedToWatchlist(movie) ? (
              <RemoveWatchlist />
            ) : (
              <AddWatchlist />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
