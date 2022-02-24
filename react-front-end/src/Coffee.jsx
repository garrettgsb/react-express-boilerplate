import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Coffee.css';

export function Coffee() {
  return (
    <div id="container">
      <div class="steam" id="steam1"></div>
      <div class="steam" id="steam2"></div>
      <div class="steam" id="steam3"></div>
      <div class="steam" id="steam4"></div>

      <div id="cup">
        <div id="cup-body">
          <div id="cup-shade"></div>
          <Icon name="leaf"/> 
        </div>
        <div id="cup-handle"></div>
      </div>

      <div id="saucer"></div>

      <div id="shadow"></div>
    </div>
  );
}
