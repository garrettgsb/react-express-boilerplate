import React from "react";
import PlantListItem from "./PlantListItem";

export default function PlantList({ plants }) {

  const parsedPlants = plants.map(plant =>
    <PlantListItem
      key={plant.id}
      id={plant.id}
      scientificName={plant.scientific_name}
      commonName={plant.common_name}
      photo={plant.photo}
      description={plant.description}
      nickname={plant.nickname}
    />
  );

  return (
    <main className="container">
      { parsedPlants }
    </main>
  );
}