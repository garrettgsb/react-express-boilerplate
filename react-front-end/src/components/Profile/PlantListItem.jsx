import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Button, Card, Icon, Image, Label, Segment } from "semantic-ui-react";
import { getPlantById } from "../../helpers/selectors";

export default function PlantListItem({ user_id, id, scientificName, commonName, photo, description, nickname, plant_since, onClick, setSelectedPlant, plant }) {

  const [state, setState] = useState({
    wishlist_user_id: user_id,
    plant_id: id
  });

  const addWishlistPlant = (wishlist_user_id, plant_id) => {
    axios
      .post("/api/wishlist", {
        wishlist_user_id: wishlist_user_id,
        plant_id: plant_id
      })
      .then(function (response) {
        console.log("Post made to db!", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Card compact>

      <Card.Content centered>
        <div className="plant-header">
          <Image
            src={photo}
            size='small'
            floated="left"
          />
          <div className="plant-name">
            <Label as='a' color='olive' ribbon="right">
              <Icon name="leaf" /><i>"{nickname}"</i>
            </Label>
            <div className="plant-name-details">
              <Card.Header><b>{commonName}</b></Card.Header>
              <Card.Header>{scientificName}</Card.Header>
              <Card.Meta>Plant Since {(plant_since).split('-')[0]}</Card.Meta>
            </div>
          </div>
        </div>
        <Card.Description
          style={{ overflow: "auto", maxHeight: "100px" }}
        >
          <Segment>
            {description}
          </Segment>
        </Card.Description>
      </Card.Content>

      <Card.Content>
        <span className="left floated">
          <Button
            color="grey"
            basic
            onClick={() => {
              addWishlistPlant(state.wishlist_user_id, state.plant_id);
              onClick();
              setState((prev) => ({
                ...prev,
                wishlist: {
                  wishlist_user_id: user_id,
                  plant_id: id
                },
              }));
            }}>
            <Icon className="like" />
            Add to Wishlist
          </Button>
        </span>

        <span className="right floated">
          <Button
            color="grey"
            basic
            onClick={() => {
              setSelectedPlant(plant);
              console.log("clicked");
            }}
          >
            See Info
          </Button>
        </span>
      </Card.Content>
    </Card>
  )
}