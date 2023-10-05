import React, { useEffect } from "react";
import Banner from "./Banner";
import tmdb_api_requests from "../TMDB_API_Requests";
import MoviesListRow from "./MoviesListRow";

function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let results = [];
  results.push({ genre: "Top Rated", url: tmdb_api_requests.top_rated_url });
  results.push({
    genre: "Trending Now",
    url: tmdb_api_requests.trending_url,
  });
  results.push({ genre: "Action", url: tmdb_api_requests.action_movies_url });
  results.push({
    genre: "Animation",
    url: tmdb_api_requests.animation_movies_url,
  });
  results.push({
    genre: "Sci-Fi",
    url: tmdb_api_requests.science_fiction_movies_url,
  });
  results.push({
    genre: "Thriller",
    url: tmdb_api_requests.thriller_movies_url,
  });
  results.push({ genre: "War", url: tmdb_api_requests.war_movies_url });
  results.push({ genre: "Horror", url: tmdb_api_requests.horror_movies_url });

  return (
    <div>
      <Banner />
      {results.map((movie) => (
        <MoviesListRow
          genre_Url={movie.url}
          title={movie.genre}
          isLoggedIn={props.isLoggedIn}
          handleAddWatchlistClick={props.handleAddWatchlistClick}
          handleRemoveWatchlistClick={props.handleRemoveWatchlistClick}
          isMovieAddedToWatchlist={props.isMovieAddedToWatchlist}
        />
      ))}
    </div>
  );
}

export default Home;
