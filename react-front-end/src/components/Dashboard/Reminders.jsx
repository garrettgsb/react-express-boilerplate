import React from "react";
import "semantic-ui-css/semantic.min.css"
import { Button, Checkbox, Image, Card, Feed } from 'semantic-ui-react'
import wateringcan from "../../assets/wateringcan.png";

export default function Reminders(props) {

  return (
    <Card>
    <Card.Content>
      <Card.Header>Watering Reminders <Image src={wateringcan} size="tiny" /> </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Date content='Coming Soon' />
            <Feed.Summary>
            <Checkbox label='Megan Thee Plant in 2 days' />
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
            <Checkbox label='Orlando Bloom in 3 days' />
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
            <Checkbox label='Cactus Everdeen in 4 days' />
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Content>
          <Feed.Date content='Next Week' />
            <Feed.Summary>
            <Checkbox label='Figgy Smalls in 7 days' />
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
            <Checkbox label='Blue Ivy in 10 days' />
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>


  );
}
