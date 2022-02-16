import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Button } from "semantic-ui-react";

export default function Rooms(props) {
  return <Segment style={{ overflow: "auto", maxHeight: 400 }}>
        <main>
        <div class="ui card">
          <div class="image">

          </div>
          <div class="content">
            <p class="header">Chikorita</p>
            <div class="meta">
              <span class="quote">Beleaf in yourself!</span>
            </div>
            <Button basic color='blue' content='Edit' floated="left"/>
          </div>

        </div>
    </main>

    <main class="name-container">
        <div class="ui card">
          <div class="image">
          </div>
          <div class="content">
            <p class="header">Chikorita</p>
            <div class="meta">
              <span class="quote">Beleaf in yourself!</span>
            </div>
            <Button basic color='blue' content='Edit' floated="left"/>
          </div>

        </div>
    </main>

    <main>
        <div class="ui card">
          <div class="image">
          </div>
          <div class="content">
            <p class="header">Chikorita</p>
            <div class="meta">
              <span class="quote">Beleaf in yourself!</span>
            </div>
            <Button basic color='blue' content='Edit' floated="left"/>
          </div>

        </div>
    </main>

    <main class="name-container">
        <div class="ui card">
          <div class="image">
            <img src="https://archives.bulbagarden.net/media/upload/thumb/b/bf/152Chikorita.png/250px-152Chikorita.png" alt="avatar"/>
          </div>
          <div class="content">
            <p class="header">Chikorita</p>
            <div class="meta">
              <span class="quote">Beleaf in yourself!</span>
            </div>
            <Button basic color='blue' content='Edit' floated="left"/>
          </div>

        </div>
    </main>
  </Segment>;
}
