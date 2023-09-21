const APIKEY = "e7469bba1300e51f173f96090ac30c33";
const baseUrl = "https://api.themoviedb.org/3";
const tmdb_api_requests = {
  action_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=28`,
  adventure_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=99`,
  comedy_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=35`,
  animation_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=16`,
  horror_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=27`,
  thriller_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=53`,
  top_rated_url: `${baseUrl}/movie/top_rated?api_key=${APIKEY}&language=en-US`,
};

export default tmdb_api_requests;
