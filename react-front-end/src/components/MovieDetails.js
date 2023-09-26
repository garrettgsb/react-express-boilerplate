import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import tmdb_api_requests from "../TMDB_API_Requests";

function MovieDetails() {
  const [currentMovieDetails, setCurrentMovieDetails] = useState();
  const { id } = useParams();
  useEffect(() => {
    getCurrentMovieDetails();
    window.scrollTo(0, 0);
  }, []);

  const url = `${tmdb_api_requests.baseUrl}/movie/${id}?api_key=${tmdb_api_requests.apikey}&language=en-US`;
  async function getCurrentMovieDetails() {
    const request = await axios.get(url);
    setCurrentMovieDetails(request.data);
    console.log(request.data);
    return request;
  }
  return <div className="movie"></div>;
}

export default MovieDetails;
