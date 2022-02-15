import React from "react";
import "semantic-ui-css/semantic.min.css"
import PlantList from "./PlantList";

export default function Profile({ name }) {
  return (
    <main class="container">
      <div class="plants">
        <h2>
          Welcome {name}, thanks for visiting my profile!
        </h2>
        <div class="ui container">
        <PlantList />
        </div>  
      </div>
      <div>
        <div class="ui card">
          <div class="image">
            <img src="https://archives.bulbagarden.net/media/upload/thumb/b/bf/152Chikorita.png/250px-152Chikorita.png" alt="avatar"/>
          </div>
          <div class="content">
            <a class="header">Kristy</a>
            <div class="meta">
              <span class="date">Joined in 2013</span>
            </div>
            <div class="description">
              Kristy is an art director living in New York.
            </div>
          </div>
          <div class="extra content">
            <a>
              <i class="user icon"></i>
              22 Friends
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}