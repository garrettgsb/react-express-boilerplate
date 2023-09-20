const APIKEY = "e7469bba1300e51f173f96090ac30c33";
const baseUrl = "https://api.themoviedb.org/3";
const tmdb_api_requests = {
  action_movies_url: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=28`,
};

export default tmdb_api_requests;
