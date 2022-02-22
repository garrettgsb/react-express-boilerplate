import React from "react";
import { Link } from "react-router-dom";
import { Card, List, Image, Button } from "semantic-ui-react";
import { getUserById } from "./helpers/selectors";

export default function WishlistItem({ id, scientificName, commonName, photo, light_level, soil_type, difficulty, toxic, watering_interval, category, users, plant_user_id, setIsVisible, species_id, setSpecies }) {

  const owner = getUserById(users, plant_user_id);
  const ownerProfileUrl = "/profile/" + plant_user_id;

  return (
    <Card compact="true">
      <div className="wishlist-header">
        <Image
          src={photo}
          size="small"
        />
        <Card.Content>
          <div className="header-wishlist-plant"><b>{commonName}</b></div>
          <div>{scientificName}</div>
          <div>
            <Image size="mini" src={owner && owner.avatar} href={ownerProfileUrl} />
            <div className="meta">As Seen on  <a href={ownerProfileUrl}>{owner && owner.name}'s</a> Profile</div>
          </div>
        </Card.Content>
      </div>

      <Card.Content>
        <List className="wishlist-plant-info">
          <List.Item>
            <List.Icon name='rain' />
            <List.Content>Every {watering_interval} Days</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='sun' />
            <List.Content>{light_level}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='lab' />
            <List.Content>{soil_type}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='book' />
            <List.Content>{difficulty}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='world' />
            <List.Content>{category}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='paw' />
            <List.Content>{(toxic) ? 'Toxic' : 'Non-Toxic'}</List.Content>
          </List.Item>
        </List>
      </Card.Content>
      <Card.Content>
        <span className="left floated">
          <Button basic color="grey" onClick={() => console.log('Trying to purchase', id)}><i className="cart icon"></i>Purchase</Button>
        </span>
        <span className="right floated">
          <Button color="olive" floated="right" onClick={() => {
            setSpecies(species_id);
            setIsVisible(true);
          }}>
            <i className="add icon"></i>Add Plant
          </Button>
        </span>
      </Card.Content>
    </Card>
  )
}