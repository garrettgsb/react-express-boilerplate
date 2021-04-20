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
    amenity.type === "School" ? "https://img.pngio.com/red-circle-png-images-download-424-png-resources-with-transparent-red-dot-png-260_260.png" : 
    amenity.type === "Groceries" ? "/testicon.png" :
    amenity.type === "Park" ? "/testicon.png" :
    amenity.type === "Restaurant" ? "/testicon.png" :
    "/bar.png";

    return new Icon({
      iconUrl: image,
      iconSize: [30, 40]
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