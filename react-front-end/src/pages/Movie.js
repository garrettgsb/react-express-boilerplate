import MoviesListRow from "/home/labber/cineflix/react-front-end/src/components/MoviesListRow.js"
import tmdb_api_requests from "/home/labber/cineflix/react-front-end/src/TMDB_API_Requests.js";

import React, { useState } from 'react';
const Layout = () => {
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
          genre_Url={tmdb_api_requests.adventure_movies_url}
          title="Adventure"
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.comedy_movies_url}
          title="Comedy"
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.horror_movies_url}
          title="Horror"
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.animation_movies_url}
          title="Animation"
        />
        <MoviesListRow
          genre_Url={tmdb_api_requests.thriller_movies_url}
          title="Thriller"
        />
      </div>
      
    </>
  )
};

export default Layout;