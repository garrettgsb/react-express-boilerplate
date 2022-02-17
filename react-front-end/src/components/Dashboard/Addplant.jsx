import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import {
  Segment,
  Image,
  Dropdown,
  Grid,
  Button,
  Form,
} from "semantic-ui-react";
import { getPlantByName } from "../../helpers/selectors";

export default function AddPlant({ user, species }) {
  const [state, setState] = useState({
    plant: {},
    nickname: "",
    location: "",
  });

  const speciesOptions = species.map((element) => ({
    key: element.scientific_name,
    text: element.common_name,
    value: element.scientific_name,
    image: <Image src={element.photo} className="drop" />,
  }));

  const clickHandler = (event, data) => {
    const selectedSpecies = getPlantByName(species, data.value);
    setState((prev) => ({
      ...prev,
      plant: selectedSpecies,
    }));
  };

  const submitForm = () => {
    axios
      .post("/api/user_plants", {
        species_id: state.plant.id,
        user_id: user.id,
        nickname: state.nickname,
        location: state.location,
      })
      .then(function (response) {
        console.log("Post made to db!", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Segment>
        <h1>Add Plant</h1>
        <Grid verticalAlign="middle" centered>
          <Grid.Column width={5}>
            <Image src={state.plant.photo} size="medium" floated="left" />
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment compact>{state.plant.description}</Segment>
          </Grid.Column>
          <Grid.Column verticalAlign="middle" centered width={5}>
            <Dropdown
              className="dropdown"
              placeholder="Select Plant"
              fluid
              selection
              options={speciesOptions}
              onChange={clickHandler}
            />
            <Segment compact>Common Name: {state.plant.common_name}</Segment>
            <Segment compact>
              Scientific Name:{state.plant.scientific_name}
            </Segment>
            <Form onSubmit={submitForm}>
              <Form.Field>
                <Form.Input
                  required={true}
                  onChange={(e, data) => {
                    console.log("EEEEEE", data);
                    setState((prev) => ({
                      ...prev,
                      nickname: data.value,
                    }));
                  }}
                  label="Nickname"
                  placeholder="Add a name for your plant! (eg. Chrisofern)"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  required={true}
                  onChange={(e, data) => {
                    console.log("location", data);
                    setState((prev) => ({
                      ...prev,
                      location: data.value,
                    }));
                  }}
                  label="Location"
                  placeholder="Tell us where your plant lives! (eg Living Room)"
                />
              </Form.Field>

              <Segment compact>
                Water Requirments: {state.plant.watering_interval} Days
              </Segment>
              <Segment compact>Soil Type: {state.plant.soil_type}</Segment>
              <Button type="submit" positive floated="right">
                Save Your Plant!
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}
