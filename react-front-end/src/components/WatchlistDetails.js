import React, { useEffect, useState } from "react";
import tmdb_api_requests from "../TMDB_API_Requests";
import axios from "axios";
import "./WatchlistDetails.css";
import MovieCard from "./MovieCard";

function WatchlistDetails(props) {
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

  const handleRemoveClick = function (movie) {
    //call to remove from watchlist
    props.handleRemoveWatchlistClick(movie);
    const newWatchlist = watchlist_movies.filter(
      (favourite) => favourite.id !== movie.id
    );
    setWatchlistMovies(newWatchlist);
  };

  return (
    <div className="movies_list">
      My Watchlist
      <div className="movies_posters">
        {watchlist_movies.map((movie) => (
          <MovieCard
            movie={movie}
            isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
            isLoggedIn={props.isLoggedIn}
            handleAddWatchlistClick={props.handleAddWatchlistClick}
            handleRemoveWatchlistClick={handleRemoveClick}
            genre_Url={tmdb_api_requests.trending_url}
          />
        ))}
      </div>
    </div>
  );
}

export default WatchlistDetails;
