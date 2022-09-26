import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/esm/Image";
import Fact from "./Fact";
import ContactAgent from "./ContactAgent";
import "./ModalContent.scss";

export default function ModalContent(props) {
  const { handleClose, data, show } = props;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
  });

  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>
          {data.price > 1 && data.price < 10000
            ? `$${data.price}/month`
            : "Contact Agent"}
          {data.homeStatus === "FOR_RENT" ? (
            <span className="small ps-3">
              {data.bedrooms} bd | {data.bathrooms} ba | {data.livingArea}{" "}
              {data.livingAreaUnitsShort}
            </span>
          ) : (
            ""
          )}
          {data.listingTypeDimension === "New Construction Plan" ? (
            <span className="small ps-3">New Construction</span>
          ) : (
            ""
          )}
          <div className="small">
            {data.address && data.address.streetAddress}
            {", "}
            {data.address && data.address.city}
            {", "}
            {data.address && data.address.state}{" "}
            {data.address && data.address.zipcode}
          </div>
          {data.homeStatus === "FOR_RENT" ? (
            <span className="small d-block">
              <strong>For Rent</strong>
            </span>
          ) : (
            <span className="small d-block">
              <strong>For Sale</strong>
            </span>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col lg={7}>
              {data.photos &&
                data.photos.map((item) => {
                  return (
                    <Image
                      className="m-1"
                      key={data.photos.indexOf(item)}
                      src={item.mixedSources.jpeg[0].url}
                    ></Image>
                  );
                })}
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Overview</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Listed on {data.datePostedString}
                  </Card.Subtitle>
                  <Card.Text>{data.description}</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  {data.homeStatus === "FOR_RENT" ? (
                    <Card.Title>Rental facts and features</Card.Title>
                  ) : (
                    <Card.Title>Home facts and features</Card.Title>
                  )}
                  <div>
                    {data.resoFacts &&
                      data.resoFacts.atAGlanceFacts.map((fact) => (
                        <Fact
                          idx={data.resoFacts.atAGlanceFacts.indexOf(fact)}
                          key={data.resoFacts.atAGlanceFacts.indexOf(fact)}
                          label={fact.factLabel}
                          value={fact.factValue}
                        />
                      ))}
                  </div>
                </Card.Body>
              </Card>
              <Card>
                {isLoaded && (
                  <GoogleMap
                    zoom={15}
                    center={{ lat: data.latitude, lng: data.longitude }}
                    mapContainerClassName="single-map"
                  >
                    <Marker
                      position={{ lat: data.latitude, lng: data.longitude }}
                    />
                  </GoogleMap>
                )}
              </Card>
              <ContactAgent />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
