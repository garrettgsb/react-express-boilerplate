import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Grid, Image, Container, Card, Header } from "semantic-ui-react";

export default function Rooms(props) {
  return (
    <Container className="rooms">
      <Segment color="olive" raised>
        <Header>My Rooms</Header>
      </Segment>
      <Grid>
        <Segment raised>
          <Card.Group itemsPerRow={2}>
            <Card id="room-card-living">
              <Card.Content>
                <Card.Header>
                  Living Room
                </Card.Header>
              </Card.Content>
              <Image
                src="https://img.freepik.com/free-vector/hygge-lifestyle-flat-composition-with-relaxing-woman-stylish-interior-living-room-with-decor-furniture_1284-59820.jpg?w=826"
                size="large"
              >
              </Image>
              <Image
                src="https://pyxis.nymag.com/v1/imgs/284/267/87ccd2e3f999b864b0b1bab008267cca92-calathea.2x.rsquare.w600.jpg"
                size="small"
              >
              </Image>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>
                  Kitchen
                </Card.Header>
              </Card.Content>
              <Image
                src="https://img.freepik.com/free-vector/interior-kitchen-with-furniture-flat-style-vector-illustration-eps-10_505557-1667.jpg?w=826"
                size="large"
              />
              <Image
                src="https://mobileimages.lowes.com/productimages/775eb6c1-054d-4c54-a879-e358756b04b6/15380756.jpg?size=pdhi"
                size="small"
              ></Image>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>
                  Bedroom
                </Card.Header>
              </Card.Content>
              <Image
                src="https://img.freepik.com/free-vector/vector-cartoon-illustration-interior-orange-blue-bedroom-living-room-with-bed-soft-chair_1441-446.jpg?t=st=1645145194~exp=1645145794~hmac=4ddcae07963f9e0af39b5bb386db357c9ecbb63e0adebe4f0f792b21ef9246bb&w=826"
                size="large"
              />
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>
                  Office
                </Card.Header>
              </Card.Content>
              <Image
                src="https://img.freepik.com/free-vector/flat-hand-drawn-colleagues-working-same-room_23-2148828084.jpg?t=st=1645145858~exp=1645146458~hmac=06d1ef4185e1d2e20fcdf2ae7a02db143e15627196fb2dcc7d8c3b0515ac6c44&w=826"
                size="large"
              />
            </Card>
          </Card.Group>
        </Segment>
      </Grid>
    </Container>
  );
}
