import React, { useRef, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Image, Grid, Button, Icon, List } from "semantic-ui-react";

export default function ViewPlant({ plant, user, species, closeViewPlant }) {
  // Scroll to bottom & Scroll to top //
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const onClose = (event) => {
    closeViewPlant(false);
    window.scrollTo({
      top: 350,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", []);
  }, []);

  return (
    <div>
      <div ref={divRef} />
      <Segment raised className="view-plant" >
        <Button
          className="close-button"
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
        <Grid verticalAlign="middle" centered>
          <Grid.Column width={5}>
            <Image src={plant.photo} size="large" />
          </Grid.Column>
          <Grid.Column width={6} textAlign="center">
            <div className="plant-info">
              <h2>Scientific Name: {plant.scientific_name}</h2>
              <h2>Common Name: {plant.common_name}</h2>
                <p className="nickname">"{plant.nickname}"</p>
              <h3>
                <b>{user.name}'s</b> Plant Since {plant.created_at.split("-")[0]}
              </h3>
              <p className="nickname-plant">
                <Icon name="leaf" />
                Lives in {user.name}'s {plant.location}
              </p>
              <p className="description">{plant.description}</p>
            </div>
          </Grid.Column>
          <Grid.Column verticalAlign="middle" centered width={5}>
            <div className="plant-info-card">
              <List className="plant-list">
                <List.Item>
                  <List.Icon name="rain" />
                  <List.Content>
                    Every {plant.watering_interval} Days
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="sun" />
                  <List.Content>{plant.light_level}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="lab" />
                  <List.Content>{plant.soil_type}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="book" />
                  <List.Content>{plant.difficulty_level}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="world" />
                  <List.Content>{plant.category}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="paw" />
                  <List.Content>
                    {plant.toxic ? "Toxic" : "Non-Toxic"}
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
