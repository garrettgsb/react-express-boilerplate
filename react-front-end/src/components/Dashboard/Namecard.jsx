import React from "react";
import "semantic-ui-css/semantic.min.css"
import { Button } from 'semantic-ui-react'

export default function Namecard(props) {

  return (
    <main class="name-container">
        <div class="ui card">
          <div class="image">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png" alt="avatar"/>
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
  );
}