import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Grid, Image } from "semantic-ui-react";

export default function Rooms(props) {
  return (
    <div>
      <Segment style={{overflow: 'auto', maxWidth: 800}}>
      <Segment.Group vertical>
      <Grid verticalAlign='middle' centered>
        <Grid.Column width={8}>
        <Image
          src="https://as2.ftcdn.net/v2/jpg/02/12/89/91/1000_F_212899169_gON1sUOS7fpB8sjjtZvWhVdoHRZpNo2u.jpg"
          size="medium"
          floated="left"
        />
        </Grid.Column>
        <Grid.Column width={8}>
        <Segment compact>
          Member of the arum family Araceae, Monstera is native to tropical
          forests of southern Mexico, south to Panama. As houseplants, they are
          very unique, easygoing and always eyecatching because of their
          dramatic green leaves. They are vining plants and love to trail over
          the pot or climb along a trellis.
        </Segment>
        </Grid.Column>

                <Grid.Column width={8}>
        <Segment compact>
          Member of the arum family Araceae, Monstera is native to tropical
          forests of southern Mexico, south to Panama. As houseplants, they are
          very unique, easygoing and always eyecatching because of their
          dramatic green leaves. They are vining plants and love to trail over
          the pot or climb along a trellis.
        </Segment>
        </Grid.Column>

        <Grid.Column width={8}>
        <Segment compact>
          Member of the arum family Araceae, Monstera is native to tropical
          forests of southern Mexico, south to Panama. As houseplants, they are
          very unique, easygoing and always eyecatching because of their
          dramatic green leaves. They are vining plants and love to trail over
          the pot or climb along a trellis.
        </Segment>
        </Grid.Column>

      </Grid>
      </Segment.Group>
      </Segment>
    </div>
  );
}
