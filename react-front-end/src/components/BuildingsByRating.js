import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import StarIcon from "@material-ui/icons/Star";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  navList: {
    color: "white",
    textDecoration: "none"
  },

  ratingItem: {
    margin: "24px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "420px"
  },

  cardImg: {
    width: "100%",
    height: "200px"
  },

  cardContent: {
    padding: "20px"
  },

}));

//component to render favourites
const BuildingsByRating = () => {
  const [building, setBuilding] = useState([]);

  const { buildingId } = useParams();

  const history = useHistory();

  const buildingRating = 5;

  useEffect(() => {
    axios.get(`/api/buildings/ratings/${buildingRating}`).then((res) => {
      console.log(res.data)
      setBuilding(res.data);
    });
  }, [buildingId]);

  const handleClick = (buildingId) => {
    history.push(`/buildings/${buildingId}`);
  };

  
  const classes = useStyles();
  return (
    <div className="favourites-container">
      <h1>Top Rated Properties</h1>
      <div className="ratings-header">
        {building.map((property) => (
          <Card className={classes.ratingItem} variant="outlined" key={property.id}>
            <img
              className={classes.cardImg}
              src={property.image_url}
              alt={property.name}
            />
            <div className={classes.cardContent}>
              <h2>{property.name}</h2>
              <p>
                { property.building_rating ? <> {
                    [...Array(property.building_rating)].map((stars, index)=>{
                        return <StarIcon className={classes.starRating} key={index}/>
                      })          
                  } </> : null
                }
              </p>
              <p>{property.address}</p>
              <div>
                <Button variant="contained" color="primary" onClick={() => handleClick(property.id)}>
                  Property Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BuildingsByRating;
