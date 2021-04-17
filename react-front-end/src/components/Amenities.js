import React, { useState, useEffect } from "react";
import axios from "axios";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

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
    amenity.type === "Park" ? "/park.png" :
    amenity.type === "Restaurant" ? "/restaurant.png" :
    "/cafe.png";

    return new Icon({
      iconUrl: image,
      iconSize: [20, 20]
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