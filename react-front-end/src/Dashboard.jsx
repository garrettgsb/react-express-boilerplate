import React from "react";
import Rooms from "./components/Dashboard/Rooms";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Namecard from "./components/Dashboard/Namecard";
import Reminders from "./components/Dashboard/Reminders";
import AddPlant from "./components/Dashboard/AddPlant";
import ViewPlant from "./components/Dashboard/ViewPlant";

import "semantic-ui-css/semantic.min.css";
import "./components/Dashboard/styles.css";
import { Header, Segment, Container, Button, Grid, Message, Icon } from "semantic-ui-react";
import { getPlantsForUser, getUserById } from "./helpers/selectors";
import { useState } from "react";
import { Link } from "react-router-dom";
import DailyReminders from "./components/Dashboard/DailyReminders";

export default function Dashboard({ users, userId, plants, species, reminders, updateLocation, setAppState }) {
  const user = userId && getUserById(users, userId);
  const name = user && user.name;

  const userPlants = plants && userId && getPlantsForUser(plants, userId);

  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = () => {
    setSuccess(true);
    // alert("Successfully added!");
    setTimeout(() => {
      setSuccess(false);
    }, 3500);
  };

  if (!user) {
    return <></>; // add progress bar?
  } else {
    return (
      <Container className="app-container">
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width={12}>
              <Segment clearing>
                <Header textAlign="left" as="h2">
                  DASHBOARD
                  <Link to="/wishlist">
                    <Button
                      basic
                      positive
                      content="See Wishlist"
                      floated="right"
                    />
                  </Link>
                  <Button positive floated="right" onClick={() => setIsVisible(true)}>
                    Add A New Plant!
                  </Button>
                </Header>
              </Segment>

              <Segment textAlign="left" raised>
                <Header as="h3" className="dash-header">
                  <div>
                    Good Morning, {name}!
                  </div>
                  <DailyReminders plants={userPlants} reminders={reminders} userId={userId} />
                </Header>
              </Segment>
              {success && (
                <Message color="green" id="animated-example" className={success && "fadeOut"}>
                  <Message.Header><Icon name="leaf" />Congrats! Your new plant has been added successfully.</Message.Header>
                </Message>
              )}
              <Grid.Row>
                <DndProvider backend={HTML5Backend}>
                  <Rooms plants={plants} userId={userId} updateLocation={updateLocation} setSelectedPlant={setSelectedPlant} reminders={reminders} />
                </DndProvider>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
              <div>
                <Namecard user={user} plants={plants} />
                <Reminders plants={userPlants} reminders={reminders} userId={userId} setAppState={setAppState} />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br></br>
        <br></br>
        {isVisible && (
          <AddPlant user={user} species={species} setIsVisible={setIsVisible} setAppState={setAppState} onSubmit={onSubmit} />
        )}
        <br></br>
        {selectedPlant && (
          <ViewPlant
            user={user}
            species={species}
            plant={selectedPlant}
            closeViewPlant={() => setSelectedPlant(null)}
          />
        )}
        <br></br>
      </Container>
    );
  }
}




// ('Monstera Deliciosa', 'Swiss Cheese Plant', 'Temperate', 'Member of the arum family Araceae, Monstera is native to tropical forests of southern Mexico, south to Panama. As houseplants, they are very unique, easygoing and always eyecatching because of their dramatic green leaves. They are vining plants and love to trail over the pot or climb along a trellis.', 'https://as2.ftcdn.net/v2/jpg/02/12/89/91/1000_F_212899169_gON1sUOS7fpB8sjjtZvWhVdoHRZpNo2u.jpg', 'Bright, indirect light', 'Dense, nutrient-rich soil', true, 'Easy', 14),
// ('Orchidaceae', 'Orchid', 'Temperate', 'The orchid family is a diverse and widespread family of lowering plants, with blooms that are often colourful and fragrant. They are native to Southern China, Taiwan , Southeast Asia and New Guinea. They are very low-maintenance and can stay in bloom for up to four months if cared for properly.', 'https://assets.eflorist.com/assets/products/PHR_/TPL05-1A.jpg', 'Indirect bright light', 'Orchid potting mix', false, 'Intermediate', 14),
// ('Cactaceae', 'Cactus', 'Desert', 'Native to the Americas, cactui can be found ranging from Patagonia to some parts of Western Canada. They have adapted to live in extremely dry environments. As a result, they require very minimal care and and go a long time between waterings.', 'https://i.pinimg.com/736x/ee/ab/65/eeab65d75ae553b503f2c6a61154c0fc--indoor-house-plants-indoor-gardening.jpg', 'Bright, direct sunlight', 'Cactus growing mix', false, 'Intermediate', 14),
// ('Ficus lyrata', 'Fiddle Leaf Fig', 'Tropical', 'Native to western Africa, as a houseplant, it is a bit tricky to care. It does not respond well to being moved if it is in a spot where it is thriving. Being a tropical plant, it does not do well to cold temperatures, but has been known to survive temperatures down to 10°C.', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSkopIl_R0u0R0tFA6_2joPTCXB_TBVX4IY0Fuz3RamMzAMAZa1ia6wG5MfBWegjUk5nkHDpdSuQGs7tw3wL3ukfPWILprZ9gfZMqpJBj1AnoRSJj3WF1OrFA&usqp=CAE', 'Indirect bright light', 'A well draining high in organic matter', true, 'Intermediate', 10),
// ('Hoya', 'Hoya', 'Tropical', 'Native to several countries in Asia, Hoyas are slow-growing, vining plants. They are known as wax plants due to their thick and shiny foliage. They are very popular houseplants due to their low maintanence.', 'https://cdn.shopify.com/s/files/1/1938/3931/files/Hoya_AdobeStock_862454_square.png?v=1559070163', 'Indirect bright light', 'Dense, nutrient-rich soil', false, 'Intermediate', 7),
// ('Calathea Orbifolia', 'Calathea', 'Tropical', 'Calatheas are known for their bold patterned foliage. The leaves of most Calathea varieties fold up slightly during the night time, revealing the often colourful undersides of their striking leaves. Because of their tendancy to fold up, they are often referred to as "prayer plants."', 'https://pyxis.nymag.com/v1/imgs/284/267/87ccd2e3f999b864b0b1bab008267cca92-calathea.2x.rsquare.w600.jpg', 'Bright indirect sunlight', '50% potting soil, 20% orchid bark, 20% charcoal and 10% perlite', false, 'Hard', 14),
// ('Kalanchoe', 'Widow''s Thrill', 'Temperate', 'Native to tropical Africa, this hardy plant is a popular houseplant because of it''s low maintanence. Often only needing few waterings, this plant will usually flower year round if cared for properly', 'https://img.teleflora.com/images/o_0/l_flowers:T91-2A,pg_6/w_368,h_460,cs_no_cmyk,c_pad/f_jpg,q_auto:eco,e_sharpen:200/flowers/T91-2A/BountifulKalanchoe', 'Bright direct sunlight','Soil 60% peat moss and 40% perlite', true, 'Easy', 21),
// ('Epipremnum Aureum', 'Pothos', 'Temperate', 'Native to Mo''orea in the Society Islands of French Polynesia, it has become a popular houseplant worldwide because of their easy care and durability. They are natural air purifiers, removing common household toxins from the air.' , 'https://cdn.shopify.com/s/files/1/0068/4215/5090/t/115/assets/a4509b6c00c3--pl-GoldenPothos-4IN-po-cer-gray-035421.jpg?v=1643047907', 'Prefers medium to bright indirect light.', 'A well-draining potting mix.', true, 'Easy', 10),
// ('Pachira Auatica', 'Money Tree', 'Tropical', 'A tropical wetland tree native to Central and South America, it is often referred as the "shake money tree". In Asia, they are often symbolically associated with good financial fortune and are typically given as gifts.', 'https://cdn.rona.ca/images/31695221_L.jpg', 'It needs medium to bright indirect light.', 'A peat-moss based soil.', True, 'Easy', 21),
// ('Dracaena', 'Dracaena', 'Temperate', 'Native to Africa and southern Asia, Dracaenas can vary in size, shape and colour, but their main characteristics include long leaves growing outwards and up from a central stalk. They are popular houseplants because of their capturing leaves and easy care.', 'https://cdn.apartmenttherapy.info/image/upload/v1591409620/gen-workflow/product-listing/dracaenahd.jpg', 'It needs medium indirect sunlight.', 'It needs a well-draining, peaty soil.', true, 'Easy', 12),
// ('Dypsis Lutescens', 'Areca Palm', 'Temperate', 'Native to Madagascar, the Areca Palm is known for the arched fronds often creating a butterfly look with its leaves.', 'https://media.gettyimages.com/photos/areca-palm-in-a-clay-pot-on-a-white-background-picture-id169945272?b=1&k=20&m=169945272&s=170667a&w=0&h=cNMC1eMisZLQ4VkguV1q41q6DyI5_xAl8QQ-sv6BH8Q=', 'It does best in bright, indirect sunlight', 'It needs porous, loose soil with peat moss or sand.', False, 'Intermediate', 3),
// ('Strelitzia', 'Bird of Paradise', 'Tropical', 'Native to South Afirca, this plant gets its name due to its resemblance of its flowers to birds-of-paradise. It has large upright leaves that will add a rich, tropical flair to any space.', 'https://cdn.shopify.com/s/files/1/0492/8274/4484/products/BirdofParadiseXXLweb_1024x1024.png?v=1601850609', 'It does best with bright direct sunlight.', 'A well-draining soil with organic matter.', True, 'Intermediate', 18),
// ('Sansevieria Trifasciata', 'Snake Plant', 'Desert', 'Sansevieria trifasciata, commonly called snake plant or mother-in-law''s tongue, is native to tropical western Africa. It is a stemless evergreen perennial that, with proper care, will last for many years', 'https://i.pinimg.com/originals/bb/3c/e1/bb3ce172d9feeb8c448fa16f7018549e.png','It prefers warm, bright locations.', 'A well-drained, nutrient-rich potting mix', True, 'Easy', 10),
// ('Ulmus parvifolia', 'Bonsai', 'Tropical', 'The Chinese Elm is indigenous to China and south-east Asia. In its native environment it can be a mighty tree reaching heights of up to 80 feet (25 meters). It develops a fine branch ramification with small leaves, which makes it a very suitable Bonsai plant', 'https://media.istockphoto.com/photos/bonsai-tree-isolated-on-white-background-picture-id680145102?k=20&m=680145102&s=170667a&w=0&h=pnhtFOlNRGiU93-HLsOQxGMkZ50h6O9YwCZ4rRf0RXM=', 'It thrives in full sun or partial shade', 'Bonsai soil potting mix', True, 'Hard', 7),
// ('Ficus Elastica Tineke', 'Rubber Tree', 'Tropical', 'Ficus elastica, the rubber fig, rubber bush, rubber tree, rubber plant, or Indian rubber bush, Indian rubber tree, is a species of flowering plant in the family Moraceae, native to eastern parts of South Asia and southeast Asia. It has become naturalized in Sri Lanka, the West Indies, and the US State of Florida.', 'https://images.nieuwkoop-europe.com/images/4FIET2T10.png', 'It prefers bright, indirect light', 'A well-draining and well-aerated soil', True, 'Easy', 16)