import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_contents">
        <h1 className="banner_title">The Dark Knight</h1>
        <div className="banner_buttons">
          <button className="banner_button">More Info</button>
          <button className="banner_button">Add To Watchlist</button>
        </div>
        <h1 className="banner_description">
          Batman raises the stakes in his war on crime. With the help of Lt. Jim
          Gordon and District Attorney Harvey Dent, Batman sets out to dismantle
          the remaining criminal organizations that plague the streets. The
          partnership proves to be effective, but they soon find themselves prey
          to a reign of chaos unleashed by a rising criminal mastermind known to
          the terrified citizens of Gotham as the Joker.
        </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
}

export default Banner;
