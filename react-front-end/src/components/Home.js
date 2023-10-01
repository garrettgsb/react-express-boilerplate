import React from "react";
import Banner from "./Banner";
import MoviesList from "./MoviesList";

function Home(props) {
  return (
    <div>
      <Banner />
      <MoviesList
        isLoggedIn={props.isLoggedIn}
        handleAddWatchlistClick={props.handleAddWatchlistClick}
        handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
        isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
      />
    </div>
  );
}

export default Home;
