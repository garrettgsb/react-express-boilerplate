import React from "react";
import PlantListItem from "./PlantListItem";
import "components/Profile/Profile.scss";

function PlantList({ plants }) {

  const parsedPlants = plants.map(item =>
    <PlantListItem
      key={item.id}
      name={item.scientific_name}
      photo={item.photo}
    />
  );

  return (
    <section>
      <ul>
        {parsedPlants}
      </ul>
    </section>
  );
}

export default PlantList;