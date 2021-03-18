import React from "react";
import { Card, Button } from "react-bootstrap";
import aloeVeraImage from "../../assets/aloe-vera-cropped.png";
import styled from "styled-components";

const Styles = styled.div`
  .card {
    font-family: "Montserrat", Helvetica, sans-serif;
    border-radius: 15px;

    img {
      height: 175px;
      width: 175px;
      border-radius: 100%;
      margin: 15px auto 5px auto;
    }
  }
`;

export default function PlantListItem() {
  return (
    <Styles>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={aloeVeraImage} />
        <Card.Body class="mx-auto">
          <Card.Title>Ferdinand</Card.Title>
          <Card.Subtitle class="text-center">Aloe Vera</Card.Subtitle>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text> */}
        </Card.Body>
        {/* <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup> */}

        <Card.Body>
          <div class="row px-2 no-gutters">
            <div class="col-6">
                <h3 class="card card-block border-0 text-center"><i class="fas fa-seedling"></i></h3>
                <p class="text-center">easy</p>
            </div>
            <div class="col-6">
                <h3 class="card card-block border-0 text-center"><i class="fas fa-tint"></i></h3>
                <p class="text-center">10-14 days</p>
            </div>
          </div>
          <div class="row px-2 no-gutters">
            <div class="col-6">
                <h3 class="card card-block border-0 text-center"><i class="fas fa-sun"></i></h3>
                <p class="text-center">full sun</p>
            </div>
            <div class="col-6">
                <h3 class="card card-block border-0 text-center"><i class="fas fa-thermometer-half"></i></h3>
                <p class="text-center">18-24°C</p>
            </div>
          </div>
        </Card.Body>

        <Card.Body class="mx-auto mb-2">
          <Card.Link href="#"><Button>See More</Button></Card.Link>
        </Card.Body>
      </Card>
    </Styles>
  );
}
