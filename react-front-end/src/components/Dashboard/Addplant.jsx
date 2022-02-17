import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Image, Dropdown, Grid } from "semantic-ui-react";
import { getPlantByName } from "../../helpers/selectors";



export default function Addplant({ species }) {
  const [plant, setPlant] = useState({});

  const speciesOptions = species.map(element => ({
      key: element.scientific_name,
      text: element.common_name,
      value: element.scientific_name,
      image:  <Image src={element.photo} className='drop' /> 
    }));
  

  const clickHandler = (event, data) => {
    const selectedSpecies = getPlantByName(species, data.value)
    setPlant(selectedSpecies)
  }

  return (
    <div>
      <Segment>
        <Grid verticalAlign="middle" centered>
          <Grid.Column width={5}>
            <Image
              src={plant.photo}
              size="medium"
              floated="left"
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment compact>
            {plant.description}
            </Segment>
          </Grid.Column>
          <Grid.Column verticalAlign="middle" centered width={5}>
            <Dropdown className="dropdown"
              placeholder="Select Plant"
              fluid
              selection
              options={speciesOptions}
              onChange={ clickHandler }
            />
            <Segment compact>Common Name: {plant.common_name}</Segment>
            <Segment compact>Scientific Name:{plant.scientific_name}</Segment>
            <Segment compact>Water Requirments: {plant.watering_interval} Days</Segment>
            <Segment compact>Soil Type: {plant.soil_type}</Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}
