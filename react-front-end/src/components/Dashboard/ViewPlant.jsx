import React, { useState, useRef, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import {
  Segment,
  Image,
  Dropdown,
  Grid,
  Button,
  Icon,
  List,
} from "semantic-ui-react";
import { getPlantByName } from "../../helpers/selectors";

 
export default function ViewPlant({ plant, user, species, setIsVisible }) {

  const [state, setState] = useState({
    plant: null,
    nickname: "",
    location: "",
  });
// Scroll to bottom & Scroll to top //
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const onClose = (event) => {
    setIsVisible(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    window.addEventListener("scroll",[]);
  }, []);
  

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

  return (
    
    <div>
      <div ref={divRef} />
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
        <h1>VIEW PLANT</h1>
        <Grid verticalAlign="middle" centered>
          <Grid.Column width={5}>
              <Image src={plant.photo} size="large" />
          </Grid.Column>
          <Grid.Column width={6} textAlign="center">

              <div className="plant-info">
                <h2>
                  Scientific Name:{" "}
                  {plant.scientific_name}
                </h2>
                <h2>Common Name: {plant.common_name}</h2>
                <h3>
                  <i>{plant.nickname}</i>
                </h3>
                <h3>{plant.description}</h3>
              </div>

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



                <div className="plant-info">
                  <List className="plant-list">
                    <List.Item>
                      <List.Icon name="rain" />
                      <List.Content>
                        Every {plant.watering_interval}{" "}
                        Days
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="sun" />
                      <List.Content>
                        {plant.light_level}
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="lab" />
                      <List.Content>
                        {plant.soil_type}
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="book" />
                      <List.Content>
                        {plant.difficulty_level}
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="world" />
                      <List.Content>
                        {plant.category}
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="paw" />
                      <List.Content>
                        {plant.toxic
                          ? "Toxic"
                          : "Non-Toxic"}
                      </List.Content>
                    </List.Item>
                  </List>
                </div>
                <br></br>
         </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}
