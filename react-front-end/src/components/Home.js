import React from "react";
import Banner from "./Banner";
import MoviesList from "./MoviesList";

function Home(props) {
  return (
    <div>
      <Banner />
      <MoviesList isLoggedIn={props.isLoggedIn} />
    </div>
  );
}

export default Home;
