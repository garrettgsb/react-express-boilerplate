import React from "react";
import { Segment, Embed, Header } from "semantic-ui-react";

export default function Video() {
  return (
    <Segment raised inverted color="olive" className="video">
      <Header>Plant Care Video of The Week</Header>
      <Embed id="FvmkXyboQYI" placeholder="../images/posts/preview.png" source="youtube" />

      <Header>Plant DIY Video of The Week</Header>
      <Embed id="YYIyQyGgCvs" placeholder="../images/posts/preview_1.png" source="youtube" />
    </Segment>
  );
}
