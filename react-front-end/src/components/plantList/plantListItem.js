import React from "react";
import { Card } from "react-bootstrap";
import aloeVeraImage from "../../assets/aloe-vera-cropped.png";


export default function PlantListItem(props) {
  return (
    <>

      <div class="col-12 col-sm-11 col-md-6 col-lg-4 col-xl-3 my-3">
        <Card>
          <Card.Img variant="top" src={aloeVeraImage} />
          <Card.Body class="mx-auto">
            <Card.Title>{props.nickname || props.name}</Card.Title>
            <Card.Subtitle class="text-center">{props.nickname && props.name}</Card.Subtitle>
            {!props.nickname && <br/>}
          </Card.Body>

          <Card.Body>
            <div class="row px-2 no-gutters">
              <div class="col-6">
                  <h3 class="card card-block border-0 text-center"><i class="fas fa-seedling"></i></h3>
                  <p class="text-center">{props.difficulty}</p>
              </div>
              <div class="col-6">
                  <h3 class="card card-block border-0 text-center"><i class="fas fa-tint"></i></h3>
                  <p class="text-center">{props.water} days</p>
              </div>
            </div>
            <div class="row px-2 no-gutters">
              <div class="col-6">
                  <h3 class="card card-block border-0 text-center"><i class="fas fa-sun"></i></h3>
                  <p class="text-center">{props.sun}</p>
              </div>
              <div class="col-6">
                  <h3 class="card card-block border-0 text-center"><i class="fas fa-thermometer-half"></i></h3>
                  <p class="text-center">{props.temp}°C</p>
              </div>
            </div>
          </Card.Body>

          <Card.Body class="mx-auto mb-2">
            <Card.Link href="#" class="btn btn-outline-success">See More</Card.Link>
          </Card.Body>
        </Card>
      </div>

    </>

  );
}
