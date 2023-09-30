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
        watchlist={props.watchlist}
      />
    </div>
  );
}

export default Home;
