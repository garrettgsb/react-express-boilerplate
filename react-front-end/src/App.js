import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegistrationForm from "./components/registration";
import Navbar from "./components/navbar";
import LoginForm from "./components/Login";
import GenrePage from "./components/GenrePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import SearchPage from "./components/SearchPage";
import axios from "axios";
import WatchlistDetails from "./components/WatchlistDetails";
import emailjs from "@emailjs/browser";
import { useAuth } from "./AuthContext"; // Import the useAuth hook

export default function App() {
  const [watchlist, setWatchlist] = useState([]);
  const { isLoggedIn, authUserData } = useAuth();
  //save watchlist to DB
  const saveToStorage = (movie_id, operation) => {
    //call API to update DB
    const watchlistURL = `/api/watchlist/${operation}/${movie_id}`;
    if (watchlistURL) {
      axios.post(watchlistURL);
    }
  };

  //send email notification when movie added or removed from watchlist
  const sendEmailnotification = function (movie_name, isAdd) {
    var templateParams = {
      to_name: `${authUserData.name}`,
      movie_name: `${movie_name}`,
    };
    let template_id = process.env.REACT_APP_EMAILJS_ADD_WATCHLIST_TEMPLATE_ID;
    if (!isAdd)
      template_id = process.env.REACT_APP_EMAILJS_REMOVE_WATCHLIST_TEMPLATE_ID;

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        template_id,
        templateParams
      )
      .then(
        function (response) {
          console.log("Email sent!");
        },
        function (error) {
          console.log("Email notification FAILED...", error);
        }
      );
  };
  //add movie to watchlist
  const addMovieToWatchlist = (movie) => {
    const newWatchlist = [...watchlist, { id: movie.id }];
    setWatchlist(newWatchlist);
    saveToStorage(movie.id, "add");
    if (isLoggedIn) sendEmailnotification(movie.title, true);
  };
  //remove movie from watchlist
  const removeMovieFromWatchlist = (movie) => {
    const newWatchlist = watchlist.filter(
      (favourite) => favourite.id !== movie.id
    );
    setWatchlist(newWatchlist);
    saveToStorage(movie.id, "delete");
    if (isLoggedIn) sendEmailnotification(movie.title, false);
  };

  useEffect(() => {
    async function fetchWatchlist() {
      const watchlistURL = `/api/watchlist`;
      await axios.get(watchlistURL).then((result) => {
        setWatchlist(result.data.watchlist);
        return result.data.watchlist;
      });
    }
    fetchWatchlist();
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);
  //check whether a movie is already added to the watchlist
  const isMovieAddedToWatchlist = function (movie) {
    if (watchlist && watchlist.length > 0 && movie) {
      for (var i = 0; i < watchlist.length; i++) {
        if (watchlist[i].id === movie.id) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            index
            element={
              <Home
                isLoggedIn={isLoggedIn}
                handleAddWatchlistClick={addMovieToWatchlist}
                handleRemoveWatchlistClick={removeMovieFromWatchlist}
                isMovieAddedToWatchlist={isMovieAddedToWatchlist}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                isLoggedIn={isLoggedIn}
                handleAddWatchlistClick={addMovieToWatchlist}
                handleRemoveWatchlistClick={removeMovieFromWatchlist}
                isMovieAddedToWatchlist={isMovieAddedToWatchlist}
              />
            }
          />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="movie/:id"
            element={
              <MovieDetails
                isLoggedIn={isLoggedIn}
                handleAddWatchlistClick={addMovieToWatchlist}
                handleRemoveWatchlistClick={removeMovieFromWatchlist}
                isMovieAddedToWatchlist={isMovieAddedToWatchlist}
              />
            }
          ></Route>
          <Route
            path="/genre"
            element={
              <GenrePage
                isLoggedIn={isLoggedIn}
                handleAddWatchlistClick={addMovieToWatchlist}
                handleRemoveWatchlistClick={removeMovieFromWatchlist}
                isMovieAddedToWatchlist={isMovieAddedToWatchlist}
              />
            }
          />
          <Route
            path="/search"
            element={
              <SearchPage
                isLoggedIn={isLoggedIn}
                handleAddWatchlistClick={addMovieToWatchlist}
                handleRemoveWatchlistClick={removeMovieFromWatchlist}
                isMovieAddedToWatchlist={isMovieAddedToWatchlist}
              />
            }
          />
          <Route
            path="/my_watchlist"
            element={
              <WatchlistDetails
                watchlist={watchlist}
                handleAddWatchlistClick={addMovieToWatchlist}
                handleRemoveWatchlistClick={removeMovieFromWatchlist}
                isLoggedIn={isLoggedIn}
                isMovieAddedToWatchlist={isMovieAddedToWatchlist}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
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
      console.log(__dirname + '/react-front-end/views')
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
