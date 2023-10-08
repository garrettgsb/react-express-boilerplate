import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
import axios from "axios";
import requests from "../TMDB_API_Requests";
import tmdb_api_requests from "../TMDB_API_Requests";

function Banner() {
  const [bannerMovie, setBannerMovie] = useState([]);
  const navigate = useNavigate();

  const handleBannerWatchTrailerClick = function (movie) {
    navigate(`/movie/${bannerMovie.id}`, {
      state: {
        genre_url: `${tmdb_api_requests.trending_url}`,
        fireFunction: true,
      },
    });
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.top_rated_url);
      setBannerMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  const handleInfoClick = function (movie) {
    //navigate to movie details page
    navigate(`/movie/${movie.id}`, {
      state: { genre_url: `${tmdb_api_requests.trending_url}` },
    });
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {bannerMovie.title || bannerMovie.name || bannerMovie.orignal_name}
        </h1>
        <div className="banner_buttons">
          <button
            className="banner_button"
            onClick={() => handleInfoClick(bannerMovie)}
          >
            More Info
          </button>
          <button
            onClick={() => handleBannerWatchTrailerClick(bannerMovie.name)}
            className="banner_button"
          >
            Watch Trailer
          </button>
        </div>
        <h1 className="banner_description">{bannerMovie.overview}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
}

export default Banner;
