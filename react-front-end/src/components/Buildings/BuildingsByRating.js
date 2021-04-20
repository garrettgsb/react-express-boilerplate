import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import Card from "@material-ui/core/Card";

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  navList: {
    color: "white",
    textDecoration: "none",
  },

  ratingItem: {
    margin: "12px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "450px"
  },

  media: {
    height: 250,
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

//component to render favourites
const BuildingsByRating = (props) => {
  const [building, setBuilding] = useState([]);

  const { buildingId } = useParams();

  const history = useHistory();

  const buildingRating = props.buildingRating;

  useEffect(() => {
    axios.get(`/api/buildings/ratings/${buildingRating}`).then((res) => {
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
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={property.image_url}
                alt={property.name}
              />
              <CardContent className={classes.cardContent}>
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
                <CardActions>
                  <Button variant="contained" color="primary" onClick={() => handleClick(property.id)}>
                    Property Details
                  </Button>
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BuildingsByRating;
