import React, { useEffect, useState } from "react";
import "./GenrePage.css";
import axios from "axios";
import tmdb_api_requests from "../TMDB_API_Requests";
import { useSearchParams, useNavigate } from 'react-router-dom';

const APIKEY = tmdb_api_requests.apikey;
function SearchPage(props) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    async function getAllMoviesOfGenre() {
      const query = Object.fromEntries([...searchParams]).query;
      setSearchQuery(query)
      const request = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}&include_adult=false&language=en-US&page=1`)

      setMovies(request.data.results);
      return request
    }

    getAllMoviesOfGenre()
  }, [searchParams]);

  const handleClick = function (event, movie) {
    console.log( " yuh")
    console.log(movie)
    navigate(`/movie/${movie.id}`, {
      state: { genre_url: `${tmdb_api_requests.baseUrl}/discover/movie?api_key=${tmdb_api_requests.apikey}&with_genres=${movie.genre_ids[0]}&include_adult=false` },
    });
  };

  const poster_baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="movies_row_grid">
      Showing Results for: "{searchQuery}"
      <div className="movies_row_posters_grid">
        {movies.map((movie) => (
          <div className="movie_card_grid" onClick={(event) => handleClick(event, movie)}>
            <img
              key={movie.id}
              className="movie_poster_grid"
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
            </div>
          </div>
        ))}
      </div>
    </div>);
}

export default SearchPage;