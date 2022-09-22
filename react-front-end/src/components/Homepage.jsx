import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Homepage.css";

export default function Homepage() {
  
  return (
    <div>
      <div className="home-intro">
        <p>Welcome to WeRun</p>
        <p>We help you get connected to runs near you.</p>
      </div>

      <div className="home-join">
        <p>Find a run near you </p>
      </div>

      <div className="home-plan">
        <p>Create a run</p>
      </div>
    </div>
  
  )
}