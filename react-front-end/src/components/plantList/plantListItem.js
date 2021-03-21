import React from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
// import aloeVeraImage from "../../assets/aloe-vera-cropped.png";


export default function PlantListItem(props) {
  const addToGarden = () => {
    console.log("Adding to garden plant id:", props.speciesId);

    axios.get(`http://localhost:8080/garden/plant/${props.speciesId}`, {withCredentials: true})
    .then((res) => {
      console.log("Server responded to garden add request");
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  const addToWishlist = () => {
    console.log("Adding to wishlist plant id:", props.speciesId);

    axios.get(`http://localhost:8080/wishlist/plant/${props.speciesId}`, {withCredentials: true})
    .then((res) => {
      console.log("Server responded to wishlist add request");
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  const moveToGraveyard = () => {
    console.log("Moving to graveyard plant id:", props.plantId);

    axios.get(`http://localhost:8080/graveyard/plant/${props.plantId}`, {withCredentials: true})
    .then((res) => {
      console.log("Server responded to graveyard move request");
      console.log(res.data);


      props.hook && props.hook((prev) => {
        const updated = prev.filter((element) => {
          return element.id !== props.plantId;
        });
        return updated;
      });

    }).catch((err) => {
      console.log(err);
    });
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
            {props.gardenButton &&
              <Card.Link className="btn btn-success" onClick={addToGarden}><i className="fas fa-plus-circle"></i> Garden</Card.Link>
            }
            {props.wishlistButton &&
              <Card.Link className="btn btn-outline-success" onClick={addToWishlist}><i className="far fa-heart"></i> Wishlist</Card.Link>
            }
            {props.hook &&
              <Card.Link className="btn btn-outline-danger" onClick={moveToGraveyard}><i className="fas fa-skull-crossbones"></i> Graveyard</Card.Link>
            }
          </Card.Body>
        </Card>
      </div>

    </>

  );
}
