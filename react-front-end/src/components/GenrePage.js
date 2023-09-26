import React, { useEffect, useState } from "react";
import "./GenrePage.css";
import axios from "axios";
// import tmdb_api_requests from "../TMDB_API_Requests";
// import { BrowserRouter, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
// import MoviesList from "./MoviesList";
// import MoviesListRow from "./MoviesListRow";

const APIKEY = "d01e999f8dded44697df8754a29f9c29";


function GenrePage(props) {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState('');


  useEffect(() => {
    async function getAllMoviesOfGenre() {

      const genreId = Object.fromEntries([...searchParams]).id;
      const genreName = Object.fromEntries([...searchParams]).name;
      setName(genreName)
      const request = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=${genreId}&include_adult=false&page=3`)
     
      setMovies(request.data.results);
      console.log(request.data);
      return request
    }
    
    getAllMoviesOfGenre()
  }, [props.url]);
  
  const poster_baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="movies_row_grid">
      {name}
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

export default GenrePage;