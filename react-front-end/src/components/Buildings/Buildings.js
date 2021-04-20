import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

// Imports to style pop up 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import StarIcon from "@material-ui/icons/Star";

// Styles pop up size
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


//component to render all buildings
const Buildings = (props) => {
  const classes = useStyles();
  
  const [buildings, setBuildings] = useState([]);

  const { buildingId } = useParams();

  const history = useHistory();

  const icon = new Icon({
    iconUrl: "/building.png",
    iconSize: [20, 20],
  });

  const buildingRating = props.buildingRating;

  useEffect(() => {
    if (buildingRating != null) {
      axios.get(`/api/buildings/ratings/${buildingRating}`).then((res) => {
        setBuildings(res.data);
      });
    } else {
      axios.get(`/api/buildings`).then((res) => {
        setBuildings(res.data);
      });
    }
  }, [buildingId]);

  const handleClick = (buildingId) => {
    history.push(`/buildings/${buildingId}`);
  };

  return (
    <div className="Buildings">
      {buildings.map((building) => (
        <Marker
          key={building.id}
          position={[building.latitude, building.longitude]}
          icon={icon}
        >
          <Popup>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={building.name}
                  height="140"
                  image={building.image_url}
                  title={building.name}
                />
                <CardContent>
                  <Typography component="h4">
                  {building.name}
                  </Typography>
                  <p>
                    {buildingRating ? <> {
                        [...Array(buildingRating)].map((stars, index)=>{
                            return <StarIcon className={classes.starRating} key={index}/>
                          })          
                      } </> : null
                    }
                  </p>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {building.address}
                  </Typography>
                  <Link component="button" variant="body2" color="primary" onClick={() => handleClick(building.id)}>
                  PROPERTY DETAILS
                </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default Buildings;
