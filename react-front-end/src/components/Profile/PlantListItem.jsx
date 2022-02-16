import React from "react";
import { Link } from 'react-router-dom';

export default function PlantListItem({ id, scientificName, commonName, photo, description, nickname }) {
  return (
    <div className="ui link cards">
    <div className="card">
      <div className="image">
        <img src={photo} alt="plant"/>
      </div>
      <div className="content">
        <div className="header">{commonName}</div>
        <div className="meta">"{nickname}"</div>
        <div className="meta">
          <span className="date">{scientificName}</span>
        </div>
        <div className="description">
          {description}
        </div>
      </div>
      <div className="extra content">
      <span className="right floated">
      <Link to={`/plants/${id}`}>
        <button className="ui button" onClick={() => console.log('See Info clicked! id is', id)}>See Info</button>
      </Link>
      </span>
      <span className="left floated">
        <button className="ui button" onClick={() => console.log('Add to Wishlist clicked! id is', id)}><i className="like icon"></i>Add to Wishlist</button>
      </span>
      </div>
    </div>
  </div>
  )
}