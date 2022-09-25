import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardItem.scss";

const CardItem = () => {
  const items = [
    {
      title: "Buy a home",
      type: "buy",
      description: "Listings you won't find anywhere else.",
      button: "Browse homes",
      image:
        "https://thumbs.dreamstime.com/b/vintage-clipart-house-fenced-yard-hi-quality-image-house-home-fenced-yard-as-vintage-retro-clipart-great-177066401.jpg",
      link: "/homes_sale",
    },
    {
      title: "Sell a home",
      type: "sell",
      description: "Let us help you navigate a successful sale.",
      button: "See your options",
      image:
        "https://thumbs.dreamstime.com/b/vintage-clipart-house-home-hi-quality-image-house-home-yard-trees-as-vintage-retro-clipart-great-posters-177065927.jpg",
      link: "/sell",
    },
    {
      title: "Rent a home",
      type: "rent",
      description: "Find the perfect place to call home.",
      button: "Find rentals",
      image:
        "https://thumbs.dreamstime.com/b/vintage-clipart-house-hi-quality-image-house-neighbohood-as-vintage-retro-clipart-great-posters-packaging-brochures-177059492.jpg",
      link: "/homes_rent",
    },
  ];
  const data = items.map((item) => (
    <Col key={items.indexOf(item)}>
      <Card>
        <Card.Img className="card_img" variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button as="a" variant="primary" href={item.link}>
            {item.button}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <Container>
      <Row className="justify-content-center">{data}</Row>
    </Container>
  );
};

export default CardItem;
