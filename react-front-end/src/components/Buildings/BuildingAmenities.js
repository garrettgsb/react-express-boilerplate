import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import axios from "axios";
import "./Building.css";

//component to render amenities for a building
export default function BuildingAmenities() {
  const [amentities, setAmentities] = useState([]);

  useEffect(() => {
    axios.get("/api/:id/building_amenities").then((res) => {
      setAmentities(res.data);
    });
  }, []);

  return (
    <Card variant="outlined" className="amenities-container">
      <h2>Amenities</h2>
      <Grid direction="row" container spacing={3} className="amenities-box">
        {amentities.map((amenity) => (
          <Grid item xs className="amenities-item" key={amenity.id}>
            <p>{amenity.name}</p>
            <img
              className="building_amenities-image"
              src={amenity.image_url}
              alt={amenity.name}
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
