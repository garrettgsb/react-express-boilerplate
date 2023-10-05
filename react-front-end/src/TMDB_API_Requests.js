//Add dotenv so my can read the .env file.
require('dotenv').config()

const APIKEY = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const tmdb_api_requests = {
  action_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=28&include_adult=false`,
  war_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=10752&include_adult=false`,
  science_fiction_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=878&include_adult=false`,
  animation_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=16&include_adult=false`,
  horror_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=27&include_adult=false`,
  thriller_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=53&include_adult=false`,
  top_rated_url: `${baseUrl}/movie/top_rated?api_key=${APIKEY}&language=en-US&include_adult=false`,
  trending_url: `${baseUrl}/trending/all/week?api_key=${APIKEY}&language=en-US&include_adult=false`,
  genre_list: `${baseUrl}/genre/movie/list?api_key=${APIKEY}&language=en-US&include_adult=false`,
  apikey: APIKEY,
  baseUrl: baseUrl,
};

export default tmdb_api_requests;
