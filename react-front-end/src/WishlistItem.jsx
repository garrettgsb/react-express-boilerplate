import React from "react";
import { Link } from "react-router-dom";
import { Card, List, Image } from "semantic-ui-react";
import { getUserById } from "./helpers/selectors";

export default function WishlistItem({ id, scientificName, commonName, photo, light_level, soil_type, difficulty, toxic, watering_interval, category, users, plant_user_id, }) {

  const owner = getUserById(users, plant_user_id);

  return (
    <Card compact>
      <Image
        src={photo}
        size="medium"
        centered
      />
      <Card.Content>
        <div className="header">{commonName}</div>
        <div className="meta">{scientificName}</div>
        <div className="description">As Seen on {owner && owner.name}'s Profile</div>
      </Card.Content>
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
          <button className="ui button" onClick={() => console.log('Add to Wishlist clicked! id is', id)}><i className="cart icon"></i>Purchase</button>
        </span>
        <span className="right floated">
          <Link to={`/plants/${id}`}>
            <button className="ui button" onClick={() => console.log('See Info clicked! id is', id)}><i className="add icon"></i>Add Plant</button>
          </Link>
        </span>
      </Card.Content>
    </Card>
  )
}