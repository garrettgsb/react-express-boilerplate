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
    axios.get(`/api/buildings/${buildingId}`).then((res) => {
      setBuilding(res.data[0]);
    });
  }, [buildingId]);

  const handleClick = () => {
    history.push("/map");
  };

  const green_rating = 52;
  const red_rating = 70;

  const getColour = (r) => {
    return r > 50 ? "green" : "red";
  };
  // useEffect(() => {
  //   Promise.all([
  //     axios.get(`/api/buildings/${buildingId}`),
  //     axios.get("/api/reviews/landlord_ratio"),
  //   ]).then((all) => {
  //     setState((prev) => ({
  //       ...prev,
  //       building: all[0].data,
  //       landlord_rating: all[1].data,
  //     }));
  //   });
  // }, []);

  return (
    <div className="building-container">
      <div className="building-header">
        <div key={building.name}>
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
          <div className="percentage-circle" style={{ width: 80, height: 80 }}>
            <h3>Landlord Approval</h3>
            <CircularProgressbar
              value={green_rating}
              text={`${green_rating}%`}
              strokeWidth={10}
              styles={buildStyles({
                textColor: getColour(green_rating),
                pathColor: getColour(green_rating),
              })}
            />
            <h3>Recommend to Friend</h3>
            <CircularProgressbar
              value={red_rating}
              text={`${red_rating}%`}
              strokeWidth={10}
              styles={buildStyles({
                textColor: getColour(red_rating),
                pathColor: getColour(red_rating),
              })}
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
