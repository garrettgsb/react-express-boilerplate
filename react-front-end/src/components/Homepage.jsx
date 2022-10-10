import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Homepage.css";
import logo from "./logo3.svg";
import squareLogo from "./weRun-rect.svg";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <div className="home">
        <div>
          <div className="home-intro">
            <h2>Welcome to weRun!</h2>
            <p>
              We organise free, weekly, timed, community events all over Canada.
              Get connected to runs near you today. Bring a buddy!
            </p>
          </div>
          <div className="home-actions">
            <Link className="home-join" to="/runs">
              <div className="underline">Find</div>
              <p>Search for local running events</p>
            </Link>
            <Link className="home-plan" to="/create">
              <div className="underline">Plan</div>
              <p>Create a new running event</p>
            </Link>
          </div>
        </div>
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
          <img src={squareLogo} className="square-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}
