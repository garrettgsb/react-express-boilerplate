import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Icon, Segment } from "semantic-ui-react";
import { getPlantsForUser } from "../../helpers/selectors";

export default function Namecard({ user, plants }) {
  const avatar = user && user.avatar;
  const name = user && user.name;
  const quote = user && user.quote;

  const plantsForUser = user && getPlantsForUser(plants, user.id);

  return (
    <main class="name-container">
      <Card style={{ overflow: 'auto', maxWidth: 2000, backgroundColor: "rgba(225, 205, 48, 0.65)", backgroundImage: "url(https://www.transparenttextures.com/patterns/asfalt-light.png)" }} >
        <div class="image">
          <img src={avatar} alt="avatar" />
        </div>
        <Card.Content>
          <p className="Bulb">{name}</p>
          <span className="date-bulb">
            <Icon name="user" /> User since {user && user.created_at.split("-")[0]}
          </span>
          <div className="description">
            <Segment color="olive" style={{ backgroundColor: "rgba(255, 255, 255, 0.20)", marginTop: "5px" }}>
              <h5>"{quote}"</h5>
            </Segment>
          </div>
        </Card.Content>
        <Card.Content>
          <span className="left floated">
            <Link to={`/profile/${user.id}`}>
            <Button inverted color='grey'>
                <i className="leaf icon"></i>
                {plantsForUser && plantsForUser.length} Plants
              </Button>
            </Link>
          </span>
          <Link to="/wishlist">
            <Button inverted color='grey' content="See Wishlist" floated="right" />
          </Link>
        </Card.Content>
      </Card>
    </main>
  );
}
