import React from "react";
import PlantListItem from "./PlantListItem";

export default function PlantList({ plants, user }) {

  const parsedPlants = plants.map(plant =>
    <PlantListItem
      key={plant.id}
      plant_id={plant.id}
      scientificName={plant.scientific_name}
      commonName={plant.common_name}
      photo={plant.photo}
      description={plant.description}
      nickname={plant.nickname}
      user_id={user}
    />
  );

  return (
    <main className="container">
      { parsedPlants }
    </main>
  );
}