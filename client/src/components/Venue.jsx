import React from "react";
import "./Venue.scss";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';


export default function Venue({bar}) {
  // console.log(bar);
  return (
    <main className="venue">
      <div className="venue--img">
        {bar.image}
      </div> 
      
      <div className="venue--name">
        {bar.name}
      </div>
      <div className="data">
        <div className="data--values">
          <div className="data--values--item">{bar.rating}</div>
          <div className="data--values--item">{bar.user_ratings_total}</div>
          <div className="data--values--item">{bar.price_level}</div>
          {/* <div className="data--values--item">My-Rtng</div> */}
        </div>
        <div className="data--description"> 
        <a href={`https://www.google.com/maps/search/?api=1&query=<address>&query_place_id=${bar.place_id}`} target="_blank" rel="noreferrer noopener" >
          <MapOutlinedIcon >
          </MapOutlinedIcon>
        </a>
        </div>
      </div>
    </main>
  )
}