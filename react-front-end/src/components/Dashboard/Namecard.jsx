import React from "react";
import "semantic-ui-css/semantic.min.css"
import { Button } from 'semantic-ui-react'


export default function Namecard({user}) {
const avatar = user && user.avatar
const name = user && user.name
const quote = user && user.quote

  return (
    <main class="name-container">
        <div class="ui card">
          <div class="image">
            <img src={avatar} alt="avatar"/>
          </div>
          <div class="content">
            <p class="header">{name}</p>
            <div class="meta">
              <span class="quote">{quote}</span>
            </div>
            <Button basic color='blue' content='Edit' floated="left"/>
          </div>

        </div>
    </main>
  );
}