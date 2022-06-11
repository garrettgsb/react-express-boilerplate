const qs = require('qs')
const axios = require('axios')

// performs spotify API authentication 
const getToken = () => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

  const url = 'https://accounts.spotify.com/api/token'
  const headers = { 
    Authorization: 'Basic ' + auth_token,
    "Content-Type": 'application/x-www-form-urlencoded'
  }
  const body = qs.stringify({ grant_type: 'client_credentials' })

  return axios.post(url, body, { headers: headers })
    .catch(error => {
      console.log("error", error.message)
    })
}

// queries spotify for a playlist
const getPlaylist = (token) => {
  const api_playlist_url = "https://api.spotify.com/v1/recommendations?limit=50&market=CA&seed_genres=pop"
  const header = { 
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
  return axios.get(api_playlist_url, { headers: header })
}

module.exports = { getToken, getPlaylist }