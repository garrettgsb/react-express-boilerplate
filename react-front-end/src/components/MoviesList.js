import React from "react";
import MoviesListRow from "./MoviesListRow";
import tmdb_api_requests from "../TMDB_API_Requests";

function MoviesList(props) {
  console.log(props);
  return (
    <>
      <div className="App">
        <MoviesListRow
          genre_Url={tmdb_api_requests.top_rated_url}
          title="Top Rated"
          isLoggedIn={props.isLoggedIn}
          handleAddWatchlistClick={props.handleAddWatchlistClick}
          handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
          isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.trending_url}
          title="Trending Now"
          isLoggedIn={props.isLoggedIn}
          handleAddWatchlistClick={props.handleAddWatchlistClick}
          handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
          isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.action_movies_url}
          title="Action"
          isLoggedIn={props.isLoggedIn}
          handleAddWatchlistClick={props.handleAddWatchlistClick}
          handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
          isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
        />

        <MoviesListRow
          genre_Url={tmdb_api_requests.animation_movies_url}
          title="Animation"
          isLoggedIn={props.isLoggedIn}
          handleAddWatchlistClick={props.handleAddWatchlistClick}
          handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
          isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
        />

        <MoviesListRow
          genre_Url={tmdb_api_requests.science_fiction_movies_url}
          title="Sci-Fi"
          isLoggedIn={props.isLoggedIn}
          handleAddWatchlistClick={props.handleAddWatchlistClick}
          handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
          isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.thriller_movies_url}
          title="Thriller"
          isLoggedIn={props.isLoggedIn}
          handleAddWatchlistClick={props.handleAddWatchlistClick}
          handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
          isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.war_movies_url}
          title="War"
          isLoggedIn={props.isLoggedIn}
          handleAddWatchlistClick={props.handleAddWatchlistClick}
          handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
          isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.horror_movies_url}
          title="Horror"
          isLoggedIn={props.isLoggedIn}
          handleAddWatchlistClick={props.handleAddWatchlistClick}
          handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
          isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
        />
      </div>
    </>
  );
}

export default MoviesList;
