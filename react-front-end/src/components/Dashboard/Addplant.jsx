import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import flying_bee from "../../assets/flying_bee.png";
import happy_cactus from "../../assets/happy_cactus.jpg";
import {
  Segment,
  Image,
  Dropdown,
  Grid,
  Button,
  Form,
  Icon,
  List,
} from "semantic-ui-react";
import { getPlantByName } from "../../helpers/selectors";

export default function AddPlant({ user, species, setIsVisible }) {
  const [state, setState] = useState({
    plant: null,
    nickname: "",
    location: "",
  });

  const onClose = (event) => {
    setIsVisible(false);
  };

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
    onClose();
  };
  return (
    <div>
      <Segment>
        <Button
          size="mini"
          basic
          color="red"
          onClick={onClose}
          floated="right"
          animated="vertical"
        >
          <Button.Content hidden>Close</Button.Content>
          <Button.Content visible>
            <Icon name="window close" color="red" size="large" />
          </Button.Content>
        </Button>
        <h1>ADD PLANT</h1>
        <Grid verticalAlign="middle" centered>
          <Grid.Column width={5}>
            {state.plant ?
            <Image
            src={state.plant.photo}
            size="large"
          /> 
          :
             <Image
             className="bee-default"
            src={flying_bee}
            size="large"
          /> 
          }
            
          </Grid.Column>
          <Grid.Column width={6} textAlign="center">
            {/* Start of ternary to only show if plant selected  */}
            {state.plant ? (
              <div className="plant-info">
                <h2>
                  Scientific Name:{" "}
                  {state.plant.scientific_name && state.plant.scientific_name}
                </h2>
                <h2>Common Name: {state.plant && state.plant.common_name}</h2>
                <h3>
                  <i>{state.plant && state.plant.nickname}</i>
                </h3>
                <p>{state.plant && state.plant.description}</p>
              </div>
            ) : (
              <div>
                <h1>Congrats on your new plant!</h1>
                <br></br>
                <Image verticalAlign="middle"
                  src={happy_cactus}
                  size="small"
                />

                <h2>Search for your plant with the drop down menu</h2>
              </div>
            )}
            {/* End of ternary */}
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
            {/* Start of ternary to only show if plant selected  */}
            {state.plant ? (
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
                    placeholder="Add a name for your plant! (eg. Christofern)"
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
                    placeholder="Tell us where your plant lives! (eg. Living Room)"
                  />
                </Form.Field>

                <div className="plant-info">
                  <List className="plant-list">
                    <List.Item>
                      <List.Icon name="rain" />
                      <List.Content>
                        Every {state.plant && state.plant.watering_interval}{" "}
                        Days
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="sun" />
                      <List.Content>
                        {state.plant && state.plant.light_level}
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="lab" />
                      <List.Content>
                        {state.plant && state.plant.soil_type}
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="book" />
                      <List.Content>
                        {state.plant && state.plant.difficulty_level}
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="world" />
                      <List.Content>
                        {state.plant && state.plant.category}
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="paw" />
                      <List.Content>
                        {state.plant && state.plant.toxic
                          ? "Toxic"
                          : "Non-Toxic"}
                      </List.Content>
                    </List.Item>
                  </List>
                </div>
                <br></br>
                <Button type="submit" positive floated="right">
                  Save Your Plant!
                </Button>
              </Form>
            ) : (
              <div className="default-view">
                <div className="plant-info">
                  <List className="plant-list">
                    <List.Item>
                      <List.Icon name="rain" />
                    </List.Item>
                    <List.Item>
                      <List.Icon name="sun" />
                    </List.Item>
                    <List.Item>
                      <List.Icon name="lab" />
                    </List.Item>
                    <List.Item>
                      <List.Icon name="book" />
                    </List.Item>
                    <List.Item>
                      <List.Icon name="world" />
                    </List.Item>
                    <List.Item>
                      <List.Icon name="paw" />
                    </List.Item>
                  </List>
                </div>
              </div>
            )}
            {/* End of ternary */}
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}
