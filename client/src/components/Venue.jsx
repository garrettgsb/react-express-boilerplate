import React from "react";
import "./Venue.scss";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { BarChartSharp } from "@mui/icons-material";


export default function Venue({bar}) {
  console.log("hello")
  console.log(bar);
  return (
    
    <main className="venue">
      {console.log(bar)}
      <div className="venue--img">
      <img src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${bar.photos[0].photo_reference}&sensor=false&maxheight=250&maxwidth=250&key=${process.env.REACT_APP_GOOGLE_PHOTO_KEY}`} alt="" />
      </div> 
      
      <div className="venue--name">
      {bar.name}
      </div>
      <div className="data">
        <div className="data--left"> 
        <div className="data--values"><strong>Rating:</strong>&nbsp;&nbsp;{bar.rating}/5</div>
        <div className="data--values"><strong>Total Reviews:</strong>&nbsp;&nbsp;{bar.user_ratings_total}</div>
        <div className="data--values"><strong>Price:</strong>&nbsp;&nbsp;{bar.price_level}/4</div>
        </div>
        <div className="data--right"> 
        <a href={`https://www.google.com/maps/search/?api=1&query=<address>&query_place_id=${bar.place_id}`} target="_blank" rel="noreferrer noopener" >
          <MapOutlinedIcon >
           </MapOutlinedIcon>
        </a>
        </div>
      </div>
    </main>
    // <main className="venue">
    //   <div className="venue--img">
    //     {bar.image}
    //   </div> 
      
    //   <div className="venue--name">
    //     {bar.name}
    //   </div>
    //   <div className="data">
    //     <div className="data--values">
    //       <div className="data--values--item">{bar.rating}</div>
    //       <div className="data--values--item">{bar.user_ratings_total}</div>
    //       <div className="data--values--item">{bar.price_level}</div>
    //       {/* <div className="data--values--item">My-Rtng</div> */}
    //     </div>
    //     <div className="data--description"> 
    //     <a href={`https://www.google.com/maps/search/?api=1&query=<address>&query_place_id=${bar.place_id}`} target="_blank" rel="noreferrer noopener" >
    //       <MapOutlinedIcon >
    //       </MapOutlinedIcon>
    //     </a>
    //     </div>
    //   </div>
    // </main>
  )
}