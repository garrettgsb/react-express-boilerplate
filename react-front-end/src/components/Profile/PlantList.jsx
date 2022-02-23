import React from "react";
import { Card } from "semantic-ui-react";
import PlantListItem from "./PlantListItem";

export default function PlantList({ plants, user, onClick, setSelectedPlant, plant, species }) {

  const parsedPlants = plants.map(plant =>
    <PlantListItem
      key={plant.id}
      id={plant.id}
      scientificName={plant.scientific_name}
      commonName={plant.common_name}
      photo={plant.photo}
      description={plant.description}
      nickname={plant.nickname}
      user_id={user}
      plant_since={plant.created_at}
      onClick={onClick}
      setSelectedPlant={setSelectedPlant}
      plant={plant}
      species={species}
    />
  );

  return (
    <>
      { parsedPlants }
    </>
  );
}