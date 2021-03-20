import React from "react";
import { Card } from "react-bootstrap";
// import aloeVeraImage from "../../assets/aloe-vera-cropped.png";


export default function PlantListItem(props) {
  const addToWishlist = () => {
    console.log("Adding to wishlist plant id:", props.speciesId);
  };


  return (
    <>

      <div className="col-12 col-sm-11 col-md-6 col-lg-4 col-xl-3 my-3">
        <Card>
          <Card.Img variant="top" src={props.photo} />
          <Card.Body className="mx-auto">
            <Card.Title className="text-center"><h5>{props.nickname || props.name}</h5></Card.Title>
            <Card.Subtitle className="text-center">{props.nickname && props.name}</Card.Subtitle>
            {!props.nickname && <br/>}
          </Card.Body>

          <Card.Body>
            <div className="row px-2 no-gutters">
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-seedling"></i></h3>
                  <p className="text-center">{props.difficulty}</p>
              </div>
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-tint"></i></h3>
                  <p className="text-center">{props.water} days</p>
              </div>
            </div>
            <div className="row px-2 no-gutters">
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-sun"></i></h3>
                  <p className="text-center">{props.sun}</p>
              </div>
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-thermometer-half"></i></h3>
                  <p className="text-center">{props.temp}°C</p>
              </div>
            </div>
          </Card.Body>

          <Card.Body className="mx-auto mb-2">
            <Card.Link href="#" className="btn btn-success" onClick={addToWishlist}><i className="fas fa-plus-circle"></i> Garden</Card.Link>
          </Card.Body>
        </Card>
      </div>

    </>

  );
}
