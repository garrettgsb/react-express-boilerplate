import React from "react";
import { Segment, Embed, Header } from "semantic-ui-react";

export default function Video() {
  return (
    <Segment raised inverted color="olive">
      <Header>
        Plant Video of the Week
      </Header>
      <Embed
        id='qQIjh4-is3I'
        placeholder='https://react.semantic-ui.com/images/image-16by9.png'
        source='youtube'
      />
    </Segment>
  );
}
