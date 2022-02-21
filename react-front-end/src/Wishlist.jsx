import React, { useState } from "react";
import WishlistItem from "./WishlistItem";
import { getPlantsForUser, getUserById, getWishlistPlants } from "./helpers/selectors";
import { Button, Card, Container, Divider, Grid, Icon, Image, Message, Segment, Transition } from "semantic-ui-react";
import AddWishlistPlant from "./components/Wishlist/AddWishlistPlant";
import { Link } from "react-router-dom";

export default function Wishlist({ users, userId, wishlist, user_plants, species }) {

  const user = getUserById(users, userId);
  const plants = wishlist && getWishlistPlants(wishlist, userId);
  const plantsForUser = user_plants && getPlantsForUser(user_plants, user && user.id);

  const [isVisible, setIsVisible] = useState(false);
  const [plantSpecies, setPlantSpecies] = useState('');
  const [success, setSuccess] = useState(false);

  const onSubmit = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const setSpecies = (species_id) => {
    setPlantSpecies(species_id);
  };

  const parsedPlants = plants && plants.map(plant =>
    <WishlistItem
      key={plant.id}
      id={plant.id}
      scientificName={plant.scientific_name}
      commonName={plant.common_name}
      photo={plant.photo}
      light_level={plant.light_level}
      soil_type={plant.soil_type}
      difficulty={plant.difficulty_level}
      toxic={plant.toxic}
      watering_interval={plant.watering_interval}
      category={plant.category}
      users={users}
      plant_user_id={plant.user_id}
      species_id={plant.species_id}
      setIsVisible={setIsVisible}
      setSpecies={setSpecies}
    />
  );

  if (!user) {
    return (
      <h2>
        Please login to view wishlist.
      </h2>
    )
  } else {
    return (
      <Container>
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width={12}>
              <Segment>
                <h1>
                  My Wishlist Plants
                </h1>
              </Segment>

              <br></br>
              {success && (
                <>
                  <Message color="green">
                    <Message.Header><Icon name="leaf" />Congrats! Your new plant has been added successfully.</Message.Header>
                    <p>
                      <Link to="/dashboard">View <b>Dashboard</b> now.</Link>
                    </p>
                  </Message>
                </>
              )}

              <br></br>

              <Segment style={{ overflow: 'auto', maxWidth: 2000 }} >
                <Card.Group itemsPerRow={3}>
                  {parsedPlants}
                </Card.Group>
              </Segment>

              <br></br>
              {isVisible && (
                <AddWishlistPlant user={user} species={species} setIsVisible={setIsVisible} plantSpecies={plantSpecies} onSubmit={onSubmit} />
              )}
              <br></br>

            </Grid.Column>
            <Grid.Column width={4}>
              <div className="avatar">
                <div className="ui card">
                  <div className="image">
                    <img src={user && user.avatar} alt="avatar" />
                  </div>
                  <div className="content">
                    <a className="header">{user && user.name}</a>
                    <div className="meta">
                      <span className="date">Joined in {user && user.created_at.split('-')[0]}</span>
                    </div>
                    <div className="description">
                      {user && user.name} is an art director living in New York.
                      <h5>"{user && user.quote}"</h5>
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="left floated">
                      <Link to={`/profile/${user.id}`}>
                        <Button basic color='green'>
                          <i className="leaf icon"></i>
                          {plantsForUser && plantsForUser.length} Plants
                        </Button>
                      </Link>
                    </span>
                    <span className="right floated">
                      <button className="ui button"><i className="add icon"></i>Follow</button>
                    </span>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}