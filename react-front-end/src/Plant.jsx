import React from "react";
import { useParams } from "react-router-dom";
import { getPlantById, getUserById } from "./helpers/selectors";
import { List } from 'semantic-ui-react';
import "./App.css";

export default function Plant({ plants, users }) {

  const params = useParams();
  const plant_id = params.plant_id;

  const plant = getPlantById(plants, plant_id);
  let user = '';

  if (plant) {
    const user_id = plant.user_id;
    user = getUserById(users, user_id);
  }

  // console.log('plant is', plant);

  return (
    <>
      <main className="plant-container">
        <div>
          <img src={plant && plant.photo} alt="plant" className="plant-photo"/>
        </div>
        <div className="plant-desc">
          <h1>Scientific Name: {plant && plant.scientific_name}</h1>
          <h1>Common Name: {plant && plant.common_name}</h1>
          <h3><i>"{plant && plant.nickname}"</i></h3>
          <p><b>{user && user.name}'s</b> Plant Since {plant && plant.created_at.split('-')[0]}</p>
          <p><List.Icon name="home"/>Lives in {user && user.name}'s {plant && plant.location}</p>
          <p>{plant && plant.description}</p>
        </div>
        <div className="icons">
          <List className="plant-list">
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
      </main>
    </>
  );
}