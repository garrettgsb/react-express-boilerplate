import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import PlantModal from "./modal";
import axios from "axios";
axios.defaults.withCredentials = true

// import aloeVeraImage from "../../assets/aloe-vera-cropped.png";


export default function PlantListItem(props) {
  const [modalShow, setModalShow] = useState(false);

  const difficulty = () => {
    let msg = "";
    switch (props.difficulty) {
      case 1:
        msg = "beginner";
        break;
      case 2:
        msg = "easy";
        break;
      case 3:
        msg = "moderate";
        break;
      case 4:
        msg = "difficult";
        break;
      case 5:
        msg = "expert";
        break;
      default:
        console.log(`difficulty level ${props.difficulty} not found`);
    };
    return msg;
  };

  const sun = () => {
    let msg = "";
    switch (props.sun) {
      case 1:
        msg = "very low";
        break;
      case 2:
        msg = "low";
        break;
      case 3:
        msg = "moderate";
        break;
      case 4:
        msg = "high";
        break;
      case 5:
        msg = "very high";
        break;
      default:
        console.log(`difficulty level ${props.difficulty} not found`);
    };
    return msg;
  };


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

    axios.post(`http://localhost:8080/wishlist/plant/${props.speciesId}`, {withCredentials: true, headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
  }})
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

          <Card.Body className="mb-0 pb-0">
            <div className="row px-2 no-gutters">
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-leaf"></i></h3>
                  <p className="text-center">{difficulty()}</p>
              </div>
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-tint"></i></h3>
                  <p className="text-center">{props.water} days</p>
              </div>
            </div>
            <div className="row px-2 no-gutters">
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-sun"></i></h3>
                  <p className="text-center">{sun()}</p>
              </div>
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-thermometer-half"></i></h3>
                  <p className="text-center">{props.temp}°C</p>
              </div>
            </div>
          </Card.Body>

          <Card.Body className="mx-auto mb-1 text-center">
            <Container fluid className="align-items-center">
              <Row className="mb-3">
                <Col>
                  {props.gardenButton &&
                    <Card.Link className="btn btn-outline-success" onClick={addToGarden}><i className="fas fa-plus-circle"></i><br />Garden</Card.Link>
                  }
                </Col>
                <Col>
                  {props.wishlistButton &&
                    <Card.Link className="btn btn-outline-success" onClick={addToWishlist}><i className="far fa-heart"></i> Wishlist</Card.Link>
                  }
                </Col>
                {/* <Col>
                  <Card.Link className="btn btn-success" onClick={() => setModalShow(true)}>
                        See More
                    </Card.Link>
                </Col> */}
              </Row>

              <Row className="mb-3 justify-content-md-center">
                <Card.Link className="btn btn-success" onClick={() => setModalShow(true)}>
                        See More
                </Card.Link>
              </Row>

              {props.hook &&
              <Row className="justify-content-center">
                    <Card.Link className="btn btn-outline-danger" onClick={moveToGraveyard}><i className="fas fa-skull-crossbones"></i> Graveyard</Card.Link>
              </Row>
              }
            </Container>

            <PlantModal
              name={props.name}
              scientificName={props.scientificName}
              description={props.description}
              difficulty={difficulty()}
              waterRating={props.waterRating}
              waterDesc={props.water}
              sun={sun()}
              temp={props.temp}
              fertilizer={props.fertilizer}
              toxic={props.toxic}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Card.Body>
        </Card>
      </div>

    </>

  );
}
