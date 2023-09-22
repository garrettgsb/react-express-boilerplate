const APIKEY = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const tmdb_api_requests = {
  action_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=28`,
  history_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=36`,
  science_fiction_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=878`,
  animation_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=16`,
  horror_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=27`,
  thriller_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=53`,
  top_rated_url: `${baseUrl}/movie/top_rated?api_key=${APIKEY}&language=en-US`,
};

export default tmdb_api_requests;
