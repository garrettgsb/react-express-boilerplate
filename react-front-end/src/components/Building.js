import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import ReviewsList from "./ReviewsList";
import BuildingAmenities from "./BuildingAmenities";
import FavouriteButton from "./Favourites/FavouriteButton";
import AmenMap from "./AmenMap";
import StarIcon from "@material-ui/icons/Star";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


//component to render a building
const Building = () => {
  const [building, setBuilding] = useState([]);

  const { buildingId } = useParams();

  const history = useHistory();

  // Converts the ratios to a whole number
  const landlord_percentage = Number(building.landlord_ratio)*100;
  const recommend_to_friend_percentage = Number(building.recommend_to_friend_ratio)*100;

  // Determines colour of the percentage circles
  const getColour = (r) => {
    return r > 50 ? "green" : "red"
  }

  // TODO: Use this for the average buildng star rating 
  // const building_rating = building.average_building_rating
  // console.log(building_rating);
  
  useEffect(() => {
    axios.get(`/api/buildings/${buildingId}`)
    .then((res) => {
      setBuilding(res.data[0]);
    });
  }, [buildingId]);

  const handleClick = () => {
    history.push("/map");
  };


  return (
    <div className="building-container">
      <div className="building-header">
        <div key={building.id}>
          <h1>{building.name}</h1>
          <h3>{building.neighbourhood} Neighbourhood</h3>
          <h4><StarIcon key={building.average_building_rating}/></h4>
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
                textColor: getColour(landlord_percentage),
                pathColor: getColour(landlord_percentage)
              }
              )}
            />
          <h3>Recommend to Friend</h3>
            <CircularProgressbar
              value={recommend_to_friend_percentage}
              text={`${recommend_to_friend_percentage}%`}
              strokeWidth={10}
              styles = {buildStyles({
                textColor: getColour(recommend_to_friend_percentage),
                pathColor: getColour(recommend_to_friend_percentage)
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
