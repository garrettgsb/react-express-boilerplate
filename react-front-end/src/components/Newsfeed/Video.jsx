import React from 'react';
import { Segment, Embed, Header } from 'semantic-ui-react';

export default function Video() {
  return (
    <Segment
      raised
      color="olive"
      className="video"
      style={{
        backgroundColor: 'rgba(225, 205, 48, 0.40)',
        textShadow: '2px 2px 2px #325036',
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-light.png)',
      }}
    >
      <Header style={{ color: 'white' }}>Plant Video of the Week</Header>
      <Embed id="FvmkXyboQYI" placeholder="../images/posts/preview.png" source="youtube" />

      <Header style={{ color: "white" }}>Plant DIY Video of The Week</Header>
      <Embed id="YYIyQyGgCvs" placeholder="../images/posts/preview_1.png" source="youtube" />
    </Segment>
  );
}
