import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import MoviesListRow from "./components/MoviesListRow";
import tmdb_api_requests from "./TMDB_API_Requests";

export default function App(props) {
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
          genre_Url={tmdb_api_requests.history_movies_url}
          title="History"
        />
      </div>
    </>
  );
}
/*
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
      </div>
    );
  }
}

export default App;
*/
