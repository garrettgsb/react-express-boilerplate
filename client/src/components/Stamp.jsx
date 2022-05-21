import React from "react"
import "./Stamp.scss"
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';


src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${bar.photos[0].photo_reference}&sensor=false&maxheight=1000&maxwidth=1000&key=${process.env.REACT_APP_GOOGLE_PHOTO_KEY}`}

export default function Stamp({ history }) {
  console.log("HISTORY!", { history });

  const barImage = (reference) => {
    return `https://maps.googleapis.com/maps/api/place/photo?photoreference=${reference}&sensor=false&maxheight=1000&maxwidth=1000&key=${process.env.REACT_APP_GOOGLE_PHOTO_KEY}`
  }

  return (
    <div>
      {history.map((bar, index) => {
       return (
        <div className="stamp">
        <div className="stamp--image">image</div>
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


/*


business_status: "CLOSED_TEMPORARILY"
​​
geometry: Object { location: {…}, viewport: {…} }
​​
icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png"
​​
icon_background_color: "#FF9E67"
​​
icon_mask_base_uri: "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet"
​​
name: "Shenanigans on Robson"
​​
permanently_closed: true
​​
photos: Array [ {…} ]
​​
place_id: "ChIJPQaRyYBxhlQRTbhprX1ZqOg"
​​
plus_code: Object { compound_code: "7VPC+MX Vancouver, British Columbia, Canada", global_code: "84XR7VPC+MX" }
​​
price_level: 1
​​
rating: 3.7
​​
reference: "ChIJPQaRyYBxhlQRTbhprX1ZqOg"
​​
scope: "GOOGLE"
​​
types: Array(5) [ "bar", "restaurant", "point_of_interest", … ]
​​
user_ratings_total: 421
​​
vicinity: "1227 Robson St, Vancouver"

*/