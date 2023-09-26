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
  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetails ? currentMovieDetails.backdrop_path : ""
          }`}
          alt={currentMovieDetails ? currentMovieDetails.original_title : ""}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetails ? currentMovieDetails.poster_path : ""
              }`}
              alt={
                currentMovieDetails ? currentMovieDetails.original_title : ""
              }
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {currentMovieDetails ? currentMovieDetails.original_title : ""}
            </div>
            <div className="movie__tagline">
              {currentMovieDetails ? currentMovieDetails.tagline : ""}
            </div>
            <div className="movie__rating">
              <span className="movie__voteCount">
                {currentMovieDetails
                  ? +currentMovieDetails.vote_count + " votes"
                  : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {currentMovieDetails ? currentMovieDetails.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetails
                ? "Release date: " + currentMovieDetails.release_date
                : ""}
            </div>
            <div className="movie__genres">
              {currentMovieDetails && currentMovieDetails.genres
                ? currentMovieDetails.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Plot</div>
            <div>{currentMovieDetails ? currentMovieDetails.overview : ""}</div>
          </div>
          <div className="movie__buttons">
            <button className="movie__button">Add to Favourites</button>
            <button className="movie__button">Watch Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
