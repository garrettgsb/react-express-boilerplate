import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

export default function Artwork(props) {
  const Image = styled.img`
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;

    "&:hover": {
      background: "#efefef",
      opacity: "0.3",
    },
  `;
  const Details = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;

    "&:hover": {
      background: "#696969",
      opacity: "1"
    },
  `;
  const Container = styled.div`
    position: relative;
    width: 50%;
  `;

  const Text = styled.div`
    background-color: #04aa6d;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  `;

  return (
    <div>
      <Container className="container">
        <Image
          src={props.image}
          alt="Avatar"
          className="image"
          style={{ width: "100%" }}
        />
        <Details className="middle">
          <Text className="text">{props.title}</Text>
          {/* <Text className="text">{props.username}</Text> */}
          <Text className="text">${props.price}</Text>
        </Details>
      </Container>
    </div>
  );
}
