import React, { useState } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import PlantModal from "./modal";
import ConfirmForm from "./confirmForm";
import axios from "axios";
axios.defaults.withCredentials = true

// import aloeVeraImage from "../../assets/aloe-vera-cropped.png";


export default function PlantListItem(props) {
  const [modalShow, setModalShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);

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


  const addToGarden = (nickname) => {
    console.log("Adding to garden plant id:", props.speciesId);
    console.log("Nickname", nickname);

    axios.post(`http://localhost:8080/garden/plant/${props.speciesId}`, {withCredentials: true, data: {
      nickname}})
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
            {(!props.nickname && !props.noBreak) && <br/>}
          </Card.Body>

          <Card.Body className="mb-0 py-0">
            <div className="row px-2 no-gutters">
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-leaf icon"></i></h3>
                  <p className="text-center">{difficulty()}</p>
              </div>
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-tint icon"></i></h3>
                  <p className="text-center">{props.water} days</p>
              </div>
            </div>
            <div className="row px-2 no-gutters">
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-sun icon"></i></h3>
                  <p className="text-center">{sun()}</p>
              </div>
              <div className="col-6">
                  <h3 className="card card-block border-0 text-center"><i className="fas fa-thermometer-half icon"></i></h3>
                  <p className="text-center">{props.temp}°C</p>
              </div>
            </div>
          </Card.Body>

          <Container className="text-center">
            <Row className="mb-3">
              <Col>
                <Card.Link className="btn btn-success w-100" onClick={() => setModalShow(true)}>See More</Card.Link>
              </Col>
            </Row>
            {(props.gardenButton || props.wishlistButton) &&
              <Row className="justify-content-md-center mb-3">
                {props.gardenButton &&
                  <Col>
                    <Card.Link className="btn btn-outline-success w-100" onClick={() => setConfirmShow(true)}><i className="fas fa-plus-circle"></i><br />Garden</Card.Link>
                  </Col>
                }
                {props.wishlistButton &&
                  <Col className="text-right">
                    <Button variant="outline-success" block onClick={addToWishlist}><i className="far fa-heart"/><br/>Wishlist</Button>
                    {/* <Card.Link className="btn btn-outline-success w-100" onClick={addToWishlist}><i className="far fa-heart"></i><br/>Wishlist</Card.Link> */}
                  </Col>
                }
              </Row>
            }
            {props.hook &&
              <Row className="mb-3">
                <Col>
                  <Card.Link className="btn btn-outline-secondary w-100" onClick={moveToGraveyard}><i className="fas fa-skull-crossbones"></i> Graveyard</Card.Link>
                </Col>
              </Row>
              }
          </Container>


          {/* <Card.Body className="mx-auto mb-1 text-center"> */}
            {/* <Container fluid className="justify-content-md-center">
              <Row className="mb-3 justify-content-md-center"> */}
                {/* {props.gardenButton &&
                  <Col lg={6}>
                    <Card.Link className="btn btn-outline-success" onClick={() => setConfirmShow(true)}><i className="fas fa-plus-circle"></i><br />Garden</Card.Link>
                  </Col>
                }
                {props.wishlistButton &&
                  <Col lg={6}>
                    <Card.Link className="btn btn-outline-success" onClick={addToWishlist}><i className="far fa-heart"></i> Wishlist</Card.Link>
                  </Col>
                } */}
                {/* <Col>
                  <Card.Link className="btn btn-success" onClick={() => setModalShow(true)}>
                        See More
                    </Card.Link>
                </Col> */}
              {/* </Row>

              <Row className="mb-3 justify-content-md-center">
                <Card.Link className="btn btn-success w-100" onClick={() => setModalShow(true)}>
                        See More
                </Card.Link>
              </Row>

              {props.hook &&
              <Row className="justify-content-center">
                    <Card.Link className="btn btn-outline-secondary" onClick={moveToGraveyard}><i className="fas fa-skull-crossbones"></i> Graveyard</Card.Link>
              </Row>
              }
            </Container> */}

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
            <ConfirmForm
              name={props.name}

              show={confirmShow}
              onHide={() => setConfirmShow(false)}
              onConfirm={addToGarden}
            />
          {/* </Card.Body> */}
        </Card>
      </div>

    </>

  );
}
