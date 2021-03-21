import React from 'react';
import styled from "styled-components";

import PlantListItem from "./plantListItem";

const Styles = styled.div`
  .card {
    font-family: "Montserrat", Helvetica, sans-serif;
    border-radius: 15px;

    img {
      height: 175px;
      width: 175px;
      border-radius: 100%;
      margin: 15px auto 5px auto;
    }

    i {
      color: #3B715A;
    }
  }
`;

export default function PlantList(props) {
  // create all plant list items from JSON
  // filteredSpecies.map((species, index)=> {
  //   return <p key={index}>
  //     {species.common_name}
  //   </p>
  // })

  const plantListItems = props.list.map((species, index) => {
    return (
      <PlantListItem
        key={index}
        nickname={species.nickname}
        name={species.common_name}
        photo={species.photo_url}
        difficulty={species.difficulty_rating}
        waterRating={species.watering_requirement_rating}
        water={species.watering_instructions}
        sun={species.sunlight_requirement_rating}
        temp={species.temperature_requirements}
        speciesId={species.species_id || species.id}
      />
    )
  });

  return (
    <Styles>
      <div className="row my-4 mx-4 justify-content-center">
        {/* <PlantListItem
          nickname="Fernando"
          name="Aloe Vera"
          difficulty="easy"
          water="10-14"
          sun="full sun"
          temp="18-24"
        ></PlantListItem> */}

        {plantListItems}

      </div>
    </Styles>
  );
}