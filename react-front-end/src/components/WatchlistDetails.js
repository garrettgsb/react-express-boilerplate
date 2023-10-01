import React, { useEffect, useState } from "react";
import tmdb_api_requests from "../TMDB_API_Requests";
import axios from "axios";

function WatchlistDetails(props) {
  const poster_baseUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [watchlist_movies, setWatchlistMovies] = useState([]);

  useEffect(() => {
    async function fetchAllMoviesData() {
      const request = await axios.get(tmdb_api_requests.all_movies_url);
      setMovies(request.data.results);
      return request;
    }
    fetchAllMoviesData().then((result) => {
      const all_movies = result.data.results;
      console.log(props.watchlist);
      if (all_movies && props.watchlist) {
        props.watchlist.map((movie) => {
          setWatchlistMovies(
            ...watchlist_movies,
            Array.from(all_movies).filter((x) => x.id === movie.id)[0]
          );
          return watchlist_movies;
        });
        console.log("watchlist movies: ", watchlist_movies);
      }
    });
  }, []);

  return (
    <div className="movies_row_grid">
      My Watchlist
      <div className="movies_row_posters_grid">
        {props.watchlist.map((movie) => (
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
