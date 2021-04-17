import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import ReviewsList from "./ReviewsList";
import BuildingAmenities from "./BuildingAmenities";
import FavouriteButton from "./Favourites/FavouriteButton";
import AmenMap from "./AmenMap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


//component to render a building
const Building = () => {
  const [building, setBuilding] = useState([]);

  const { buildingId } = useParams();

  const history = useHistory();

  useEffect(() => {
    axios.get(`/api/buildings/${buildingId}`)
    .then((res) => {
      setBuilding(res.data[0]);
    });
  }, [buildingId]);

  const handleClick = () => {
    history.push("/map");
  };

  const landlord_percentage = Number(building.landlord_ratio)*100;
  console.log('THIS SHIT', (landlord_percentage))
  console.log('THAT SHIT', typeof(landlord_percentage))
  const red_rating = 70;

  const getColour = (r) => {
    return r > 50 ? "green" : "red"
  }


  return (
    <div className="building-container">
      <div className="building-header">
        <div key={building.id}>
          <h1>{building.name}</h1>
          <h3>{building.neighbourhood} Neighbourhood</h3>
          <p>{building.address}</p>
          <img
            className="building_amenities-image"
            src={building.image_url}
            alt={building.name}
          />
          <FavouriteButton buildingId={building.id} />
        </div>
      </div>
      <div className="building-details">
        <div className="percentage-circles">
        <div className="percentage-circle" style={{width: 80, height: 80}}>
          <h3>Landlord Approval</h3>
            <CircularProgressbar
              value={landlord_percentage}
              text={`${landlord_percentage}%`}
              strokeWidth={10}
              styles = {buildStyles({
                textColor: getColour(red_rating),
                pathColor: getColour(red_rating)
              }
              )}
            />
          <h3>Recommend to Friend</h3>
            <CircularProgressbar
              value={red_rating}
              text={`${red_rating}%`}
              strokeWidth={10}
              styles = {buildStyles({
                textColor: getColour(red_rating),
                pathColor: getColour(red_rating)
              }
              )}
            />
            
          </div>
        </div>
        <div className="review-list">
          <ReviewsList />
          <button onClick={handleClick}>Go to the Map page</button>
        </div>
        <div className="amenities-and-map">
          <BuildingAmenities />
          <AmenMap />
        </div>
      </div>
    </div>
  );
};

export default Building;
