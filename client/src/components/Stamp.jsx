import React from "react"
import "./Stamp.scss"
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

export default function Stamp({ history }) {
  console.log("HISTORY!", { history });

  const barImage = (reference) => {
    return `https://maps.googleapis.com/maps/api/place/photo?photoreference=${reference}&sensor=false&maxheight=1000&maxwidth=1000&key=${process.env.REACT_APP_GOOGLE_PHOTO_KEY}`
  }

  return (
    <div>
      {history.map((bar, index) => {
        const barPhoto = barImage(bar.photos[0].photo_reference);
       return (
        <div className="stamp">
        <div className="stamp--image">
          <img src={barPhoto} alt="bar"/>
        </div>
        <div className="stamp--name">{bar.name}</div>
        <div className="stamp--icon">
          <MapOutlinedIcon></MapOutlinedIcon>
        </div>
      </div>
       )
      })}
    </div>
  );
}

