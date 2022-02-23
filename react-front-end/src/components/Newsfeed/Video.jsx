import React from "react";
import { Segment, Embed, Header } from "semantic-ui-react";

export default function Video() {
  return (
    <Segment raised color="olive" className="video" style={{ backgroundColor: "rgba(225, 205, 48, 0.40)", backgroundImage: "url(https://www.transparenttextures.com/patterns/asfalt-light.png)" }} >
      <Header>Plant Video of the Week</Header>
      <Embed id="FvmkXyboQYI" placeholder="../images/posts/preview.png" source="youtube" />
    </Segment>
  );
}
