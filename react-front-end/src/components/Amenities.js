import React, { useState, useEffect } from "react";
import axios from "axios";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Amenities = () => {
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    axios.get("/api/amenities").then((res) => {
      setAmenities(res.data)
    });
  }, [])

  // Selects icon image
  const getIcon = (amenity) => {
    const image = 
    amenity.type === "School" ? "/bank.png" : 
    amenity.type === "Groceries" ? "/groceries.png" :
    amenity.type === "Park" ? "/transit.png" :
    amenity.type === "Restaurant" ? "https://static.tacdn.com/img2/maps/icons/component_map_pins_v1/restaurant_tertiary_pin_default_2x.png" :
    "/bar.png";

    return new Icon({
      iconUrl: image,
      iconSize: [30, 30]
    })
  }

  return (
    <div className="Amenities">
      {amenities.map((amenity) => (
      <Marker
        key={amenity.id}
        position={[amenity.latitude, amenity.longitude]}
        icon={getIcon(amenity)}
      >
        <Popup>
          <div>
            <h2>{amenity.name}</h2>
          </div>
        </Popup>
      </Marker>
    ))}
    </div>
  )
}

export default Amenities;