import React, { useEffect, useState } from "react";
import tmdb_api_requests from "../TMDB_API_Requests";
import axios from "axios";

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

  return (
    <div className="movies_row_grid">
      My Watchlist
      <div className="movies_row_posters_grid">
        {watchlist_movies.map((movie) => (
          <img
            key={movie.id}
            className="movie_poster_grid"
            src={`${poster_baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default WatchlistDetails;
