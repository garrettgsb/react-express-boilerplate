import React, { useEffect, useState } from "react";
import "./GenrePage.css";
import axios from "axios";
import tmdb_api_requests from "../TMDB_API_Requests";
import { useSearchParams } from 'react-router-dom';

const APIKEY = tmdb_api_requests.apikey;
function SearchPage(props) {
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
  
  const poster_baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="movies_row_grid">
      Showing Results for: "{searchQuery}"
      <div className="movies_row_posters_grid">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="movie_poster_grid"
            src={`${poster_baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>);
}

export default SearchPage;