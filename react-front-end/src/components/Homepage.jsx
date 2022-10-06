import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Homepage.css";
import logo from "./logo3.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import AutoComplete from "./AutoComplete";

export default function Homepage() {
  return (
    <div>
      <div className="home-intro">
        <div>
          <h2>Welcome to WeRun</h2>
          <p>We help you get connected to runs near you.</p>
        </div>
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="home-runs">
        <div className="home-join">
          <img
            className="map-logo"
            src="https://cdn-icons-png.flaticon.com/512/819/819865.png"
            alt="map-icon"
          />
          <p>Find a run near you </p>
          <Link to="/runs">
            <Button variant="primary" type="submit">
              Find
            </Button>
          </Link>
        </div>
        <div className="home-plan">
          <img
            className="map-logo"
            src="https://cdn-icons-png.flaticon.com/512/2953/2953336.png"
            alt="run-icon"
          />
          <p>Create a run</p>
          <Link to="/create">
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
