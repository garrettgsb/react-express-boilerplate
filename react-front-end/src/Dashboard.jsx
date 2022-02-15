import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Header, Segment, Container, Button } from "semantic-ui-react";
import Rooms from "./components/Dashboard/Rooms";
import Namecard from "./components/Dashboard/Namecard";

export default function Dashboard({ user }) {
  return (
    <Container>
      <Segment clearing>
        <Header as="h2" >
        DASHBOARD
        <Button basic color='green' content='Wishlist' floated="right"/>
        </Header>
      </Segment>
      <Segment raised floated="left">Good Morning, Kanye</Segment>
      <Namecard user={user} />
      <Rooms />
     </Container>
  );
}
