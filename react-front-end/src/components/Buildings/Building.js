import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewsList from "../Reviews/ReviewsList";
import BuildingAmenities from "./BuildingAmenities";
import FavouriteButton from "../Favourites/FavouriteButton";
import AmenMap from "../Map/AmenMap";
import PercentageCircles from "./PercentageCircles";
import StarIcon from "@material-ui/icons/Star";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//component to render a building
const Building = () => {
  const [building, setBuilding] = useState([]);

  const { buildingId } = useParams();

  // Determines colour of the percentage circles
  const getColour = (r) => {  

    return r > 50 ? "green" : r < 50 ? "red" : "lightgray";
  };

  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    // setBusy(true);
    async function fetchData() {
      axios.get(`/api/buildings/${buildingId}`).then((res) => {
        setBuilding(res.data[0]);
      });
    }
    fetchData();
  }, [buildingId]);


  return (
    <div className="building-container">
      <div className="building-header">
        <div key={building.id}>
          <h1>{building.name}</h1>
          <h3>{building.building_address}</h3>
          <h4>
            {building.average_building_rating ? (
              <>
                {" "}
                {[...Array(building.average_building_rating)].map(
                  (stars, index) => {
                    return <StarIcon key={index} />;
                  }
                )}{" "}
              </>
            ) : null}
          </h4>

          <p>{building.address}</p>
          <img
            className="building_header"
            src={building.image_url}
            alt={building.name}
          />
          <FavouriteButton buildingId={building.building_id} />
        </div>
      </div>
      <div className="building-details">
        
      <div className="review-list">
        <div className="percentage-circle">
          <div className="landord-approval">
            {isBusy ? <> {
              <CircularProgressbar
              value={Number(building.landlord_ratio)}
              text={`${building.landlord_ratio}%`}
              strokeWidth={10}
              styles = {buildStyles({
                textColor: getColour(Number(building.landlord_ratio)),
                pathColor: getColour(Number(building.landlord_ratio))
              }
              )}
              />
            }  </> : "Loading"}
            <h3>Landlord Approval</h3>
          </div>
          <div className="recommend-friend">
            <CircularProgressbar
              value={building.recommend_to_friend_ratio}
              text={`${building.recommend_to_friend_ratio}%`}
              strokeWidth={10}
              styles = {buildStyles({
                textColor: getColour(building.recommend_to_friend_ratio),
                pathColor: getColour(building.recommend_to_friend_ratio)
              }
              )}
            />
            <h3>Recommend to Friend</h3>
          </div>
        </div>
          <ReviewsList />
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
