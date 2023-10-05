import React, { useEffect, useState } from "react";
import "./WatchlistDetails.css";
import axios from "axios";
import tmdb_api_requests from "../TMDB_API_Requests";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const APIKEY = tmdb_api_requests.apikey;
function GenrePage(props) {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    async function getAllMoviesOfGenre() {
      const genreId = Object.fromEntries([...searchParams]).id;
      const genreName = Object.fromEntries([...searchParams]).name;
      setName(genreName);
      const request = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=${genreId}&include_adult=false&page=3`
      );

      setMovies(request.data.results);
      return request;
    }

    getAllMoviesOfGenre();
    window.scrollTo(0, 0);
  }, [searchParams]);

  return (
    <div className="movies_list">
      {name}
      <div className="movies_posters">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
            isLoggedIn={props.isLoggedIn}
            handleAddWatchlistClick={props.handleAddWatchlistClick}
            handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
            genre_Url={`${tmdb_api_requests.baseUrl}/discover/movie?api_key=${tmdb_api_requests.apikey}&with_genres=${movie.genre_ids[0]}&include_adult=false`}
          />
        ))}
      </div>
    </div>
  );
}

export default GenrePage;
