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
      <div className="home">
        <div>
          <div className="home-intro">
            <h2>Welcome to weRun!</h2>
            <p>We organise free, weekly, timed, community events all over Canada. Get connected to runs near you today. Bring a buddy!</p>
          </div>
          <div className="home-actions">
            <Link className="home-join" to="/runs">
              Find
              <p>Search for local running events</p>
            </Link>
            <Link className="home-plan" to="/create">
              Plan
              <p>Create a new running event</p>
            </Link>
          </div>
        </div>
        <img src={logo} className="logo" alt="logo" />
      </div>
    </div>
  );
}
