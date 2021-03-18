import React from "react";
import { Card, Container } from "react-bootstrap";
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

      <Container>
        <div class="row my-4 mx-4 justify-content-center">

          <div class="col-12 col-md-6 col-lg-4 col-xl-3 my-3">
          <Card>
            <Card.Img variant="top" src={aloeVeraImage} />
            <Card.Body class="mx-auto">
              <Card.Title>Ferdinand</Card.Title>
              <Card.Subtitle class="text-center">Aloe Vera 1</Card.Subtitle>
            </Card.Body>

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
              <Card.Link href="#" class="btn btn-outline-success">See More</Card.Link>
            </Card.Body>
          </Card>
          </div>

          <div class="col-12 col-md-6 col-lg-4 col-xl-3 my-3">
          <Card>
            <Card.Img variant="top" src={aloeVeraImage} />
            <Card.Body class="mx-auto">
              <Card.Title>Ferdinand</Card.Title>
              <Card.Subtitle class="text-center">Aloe Vera 2</Card.Subtitle>
            </Card.Body>

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
              <Card.Link href="#" class="btn btn-outline-success">See More</Card.Link>
            </Card.Body>
          </Card>
          </div>

          <div class="col-12 col-sm-11 col-md-6 col-lg-4 col-xl-3 my-3">
          <Card>
            <Card.Img variant="top" src={aloeVeraImage} />
            <Card.Body class="mx-auto">
              <Card.Title>Ferdinand</Card.Title>
              <Card.Subtitle class="text-center">Aloe Vera 3</Card.Subtitle>
            </Card.Body>
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
              <Card.Link href="#" class="btn btn-outline-success">See More</Card.Link>
            </Card.Body>
          </Card>
          </div>

          <div class="col-12 col-sm-11 col-md-6 col-lg-4 col-xl-3 my-3">
          <Card>
            <Card.Img variant="top" src={aloeVeraImage} />
            <Card.Body class="mx-auto">
              <Card.Title>Ferdinand</Card.Title>
              <Card.Subtitle class="text-center">Aloe Vera 3</Card.Subtitle>
            </Card.Body>
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
              <Card.Link href="#" class="btn btn-outline-success">See More</Card.Link>
            </Card.Body>
          </Card>
          </div>

        </div>
      </Container>



      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={aloeVeraImage} />
        <Card.Body class="mx-auto">
          <Card.Title>Ferdinand</Card.Title>
          <Card.Subtitle class="text-center">Aloe Vera</Card.Subtitle>
        </Card.Body>

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
      </Card> */}
    </Styles>
  );
}
