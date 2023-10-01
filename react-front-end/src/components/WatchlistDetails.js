import React, { useEffect, useState } from "react";
import tmdb_api_requests from "../TMDB_API_Requests";
import axios from "axios";
import "./MoviesListRow.css";
import RemoveWatchlist from "./RemoveWatchlist";

function WatchlistDetails(props) {
  const poster_baseUrl = "https://image.tmdb.org/t/p/original";
  const [watchlist_movies, setWatchlistMovies] = useState([]);

  async function getCurrentMovieDetails(url) {
    const request = await axios.get(url);
    return request.data;
  }
  async function getAllMovieDetails() {
    const newWatchlist = [];
    if (props.watchlist) {
      for (const movie of props.watchlist) {
        let url = `${tmdb_api_requests.baseUrl}/movie/${movie.id}?api_key=${tmdb_api_requests.apikey}&language=en-US&include_adult=false`;

        const results = await getCurrentMovieDetails(url);
        newWatchlist.push(results);
      }
      setWatchlistMovies(newWatchlist);
    }
  }

  useEffect(() => {
    async function getData() {
      await getAllMovieDetails();
    }
    getData();
  }, []);

  const handleClick = function (event, movie) {
    let classList = Array.from(event.target.classList);
    if (classList.includes("remove_watchlist")) {
      //call to remove from watchlist
      props.handleRemoveWatchlistClick(movie);
      const newWatchlist = watchlist_movies.filter(
        (favourite) => favourite.id !== movie.id
      );
      setWatchlistMovies(newWatchlist);
    }
  };

  return (
    <div className="movies_row">
      My Watchlist
      <div className="movies_row_posters">
        {watchlist_movies.map((movie) => (
          <div key={movie.id} className="movie_card">
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
              <div
                className="overlay_watchlist"
                onClick={(event) => handleClick(event, movie)}
              >
                <RemoveWatchlist />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchlistDetails;
