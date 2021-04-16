import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/map">
          <li>Map</li>
        </Link>
        <Link style={navStyle} to="/:userId/favourites">
          <li>Favourites</li>
        </Link>
      </ul>
    </nav>
  );
}
