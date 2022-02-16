import React from "react";
import { useParams } from "react-router-dom";
import { getPlantById } from "./helpers/selectors";
import { List } from 'semantic-ui-react';
import "./App.css";

export default function Plant({ plants }) {

  const params = useParams();
  const plant_id = params.plant_id;

  const plant = getPlantById(plants, plant_id);
  console.log('plant is', plant);

  return (
    <>
    <h1>Scientific Name: {plant && plant.scientific_name}</h1>
    <h1>Common Name: {plant && plant.common_name}</h1>
      <List className="plant-list">
      <List.Item icon='bath' content={plant && plant.watering_interval} />
      <List.Item icon='marker' content='New York, NY' />
      <List.Item
        icon='mail'
        content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
      />
      <List.Item
        icon='linkify'
        content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>}
      />
    </List>
  </>
  );
}