import React from "react";

export default function PlantListItem({ id, scientificName, commonName, photo, description }) {
  return (
    <div className="ui link cards">
    <div className="card">
      <div className="image">
        <img src={photo} alt="plant"/>
      </div>
      <div className="content">
        <div className="header">{commonName}</div>
        <div className="meta">
          <span className="date">{scientificName}</span>
        </div>
        <div className="description">
          {description}
        </div>
      </div>
      <div className="extra content">
      <span className="right floated">
        <button className="ui button">See Info</button>
      </span>
      <span className="left floated">
        <button className="ui button"><i className="like icon"></i>Add to Wishlist</button>
      </span>
      </div>
    </div>
  </div>
  )
}