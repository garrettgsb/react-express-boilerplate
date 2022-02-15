import React from 'react'

export default function PlantList() {
  return (
    <main class="container">
      <div class="ui link cards">
        <div class="card">
          <div class="image">
            <img src="https://as2.ftcdn.net/v2/jpg/02/12/89/91/1000_F_212899169_gON1sUOS7fpB8sjjtZvWhVdoHRZpNo2u.jpg" alt="plant"/>
          </div>
          <div class="content">
            <div class="header">Swiss Cheese Plant</div>
            <div class="meta">
              <a>Monstera deliciosa</a>
            </div>
            <div class="description">
              Matthew is an interior designer living in New York.
            </div>
          </div>
          <div class="extra content">
            <button class="ui button">Add to Wishlist</button>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="https://assets.eflorist.com/assets/products/PHR_/TPL05-1A.jpg" alt="plant"/>
          </div>
          <div class="content">
            <div class="header">Orchid</div>
            <div class="meta">
              <span class="date">Orchidaceae</span>
            </div>
            <div class="description">
              Molly is a personal assistant living in Paris.
            </div>
          </div>
          <div class="extra content">
          <span class="right floated">
            <button class="ui button">See Info</button>
          </span>
          <span class="left floated">
            <button class="ui button"><i class="like icon"></i>Add to Wishlist</button>
          </span>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="https://i.pinimg.com/736x/ee/ab/65/eeab65d75ae553b503f2c6a61154c0fc--indoor-house-plants-indoor-gardening.jpg" alt="plant"/>
          </div>
          <div class="content">
            <div class="header">Cactus</div>
            <div class="meta">
              <a>Cactaceae</a>
            </div>
            <div class="description">
              Elyse is a copywriter working in New York.
            </div>
          </div>
          <div class="extra content">
            <button class="ui button">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </main>
  );
}