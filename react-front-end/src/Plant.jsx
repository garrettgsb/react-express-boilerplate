import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPlantById, getUserById } from "./helpers/selectors";
import { Button, Grid, Icon, List, Segment } from 'semantic-ui-react';
import "./App.css";
import axios from "axios";

export default function Plant({ plants, users, user_id }) {

  const params = useParams();
  const plant_id = params.plant_id;

  const plant = getPlantById(plants, plant_id);
  let user = '';

  if (plant) {
    const user_id = plant.user_id;
    user = getUserById(users, user_id);
  }

  console.log('user_id', user_id)

  const [state, setState] = useState({
    wishlist_user_id: user_id,
    plant_id: plant_id
  })

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
    <Segment stretched style={{ width: "95%", margin: "auto", height: "90%" }}>
      <Grid>
        <Grid.Row stretched textAlign="center">
          <Grid.Column width={6}>
            <div className="plant-pic">
              <img src={plant && plant.photo} alt="plant" className="plant-photo" />
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="plant-info-page">
              <h1>Scientific Name: {plant && plant.scientific_name}</h1>
              <h2>Common Name: {plant && plant.common_name}</h2>
              <span className="info-title"><b><i>"{plant && plant.nickname}"</i></b></span>
              <span className="info-title"><b>{user && user.name}'s</b> Plant Since {plant && plant.created_at.split('-')[0]}</span>
              <span className="info-title"><Icon name="leaf" />Lives in {user && user.name}'s {plant && plant.location}</span>
              <p className="info-desc">{plant && plant.description}</p>

              <div className="plant-info-buttons">
                <Link to={`/profile/${user && user.id}`}>
                  <Button color='grey'>See {user && user.name}'s Profile</Button>
                </Link>
                <Button color='olive' onClick={() => {
                  addWishlistPlant(state.wishlist_user_id, state.plant_id);
                  setState((prev) => ({
                    ...prev,
                    wishlist: {
                      wishlist_user_id: user_id,
                      plant_id: plant_id
                    },
                  }));
                }}><Icon name='like' />Add to Wishlist</Button>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <div className="plant-info">
              <List className="plant-list" size="large">
                <List.Item>
                  <List.Icon name='rain' />
                  <List.Content>Every {plant && plant.watering_interval} Days</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='sun' />
                  <List.Content>{plant && plant.light_level}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='lab' />
                  <List.Content>{plant && plant.soil_type}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='book' />
                  <List.Content>{plant && plant.difficulty_level}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='world' />
                  <List.Content>{plant && plant.category}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='paw' />
                  <List.Content>{(plant && plant.toxic) ? 'Toxic' : 'Non-Toxic'}</List.Content>
                </List.Item>
              </List>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}