import React from "react";
import MoviesListRow from "./MoviesListRow";
import tmdb_api_requests from "../TMDB_API_Requests";

function MoviesList() {
  return (
    <>
      <div className="App">
        <MoviesListRow
          genre_Url={tmdb_api_requests.top_rated_url}
          title="Top Rated"
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.action_movies_url}
          title="Action"
        />

        <MoviesListRow
          genre_Url={tmdb_api_requests.animation_movies_url}
          title="Animation"
        />

        <MoviesListRow
          genre_Url={tmdb_api_requests.science_fiction_movies_url}
          title="Sci-Fi"
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.thriller_movies_url}
          title="Thriller"
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.horror_movies_url}
          title="Horror"
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.war_movies_url}
          title="War"
        />
      </div>
    </>
  );
}

export default MoviesList;
