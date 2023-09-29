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

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home isLoggedIn={loggedIn} />} />
        <Route path="/home" element={<Home isLoggedIn={loggedIn} />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="movie/:id"
          element={<MovieDetails isLoggedIn={loggedIn} />}
        ></Route>
        <Route path="/genre" element={<GenrePage />} />
        <Route path="/search" element={<SearchPage />} />


      </Routes>
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
