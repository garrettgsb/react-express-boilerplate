import React from "react";
import { Segment, Embed, Header } from "semantic-ui-react";

export default function Video() {
  return (
    <Segment raised inverted color="olive" className="video">
      <Header>Plant Video of the Week</Header>
      <Embed id="FvmkXyboQYI" placeholder="../images/posts/preview.png" source="youtube" />
    </Segment>
  );
}
