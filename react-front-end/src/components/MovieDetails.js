import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieDetails.css";
import { useLocation, useParams } from "react-router-dom";
import tmdb_api_requests from "../TMDB_API_Requests";
import MoviesListRow from "./MoviesListRow";

function MovieDetails(props) {
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
    return request;
  }
  const location = useLocation(); //to get params from Link
  const { genre_url } = location.state;

  const handleWatchlistClick = function (isAdded) {
    if (isAdded) props.handleAddWatchlistClick(currentMovieDetails);
    else props.handleRemoveWatchlistClick(currentMovieDetails);
  };

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
              {currentMovieDetails
                ? "Rating: " +
                  currentMovieDetails.vote_average.toString().substr(0, 3)
                : ""}
              <span className="movie__voteCount">
                {currentMovieDetails
                  ? " Votes: " + currentMovieDetails.vote_count
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
            {props.isLoggedIn && (
              <span>
                {props.isMovieAddedToWatchlist(currentMovieDetails) ? (
                  <button
                    className="movie__button"
                    onClick={() => handleWatchlistClick(false)}
                  >
                    Watchlist
                    <span>
                      <i className="bi bi-trash3 icon"></i>
                    </span>
                  </button>
                ) : (
                  <button
                    className="movie__button"
                    onClick={() => handleWatchlistClick(true)}
                  >
                    Watchlist
                    <span>
                      <i className="bi bi-heart-fill heart icon"></i>
                    </span>
                  </button>
                )}
              </span>
            )}
            <button className="movie__button">
              <span>
                Trailer
                <i className="bi bi-film icon" />
              </span>
            </button>
            {currentMovieDetails && currentMovieDetails.homepage && (
              <button className="movie__button">
                <a
                  href={currentMovieDetails.homepage}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <span>
                    Website
                    <i className="bi bi-link icon" />
                  </span>
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="movie__recommendations">
        <MoviesListRow
          genre_Url={genre_url}
          title="You might also like"
          isLoggedIn={props.isLoggedIn}
          movieToExclude={currentMovieDetails ? currentMovieDetails.id : ""}
          handleAddWatchlistClick={props.handleAddWatchlistClick}
          handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
          isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
        />
      </div>
    </div>
  );
}

export default MovieDetails;
