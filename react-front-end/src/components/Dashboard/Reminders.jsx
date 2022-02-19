import React from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Checkbox, Image, Card, Feed } from "semantic-ui-react";
import wateringcan from "../../assets/wateringcan.png";

export default function Reminders({ plants, reminders }) {

  const editWatered = (plantId) => {
    axios
      .patch(`/api/reminders/${plantId}`, {last_watered: new Date()}) 
      .then((response) => {
        console.log(response.data); 
      });
  };


  const reminderInstances = plants.map((plant) => {
    console.log("REEEEMINDERS", reminders)
    const daysLeft = `${plant.nickname} in 5 days`
    // In daysLeft, the integer for amount of days will need to be dynamically rendered later //
  return (  
  
  <Feed.Event>
      <Feed.Content>
        <Feed.Date content="Coming Soon" />
        <Feed.Summary>
          <Checkbox 
          label={daysLeft}
          onChange={() => editWatered(plant.id)}
          />
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  )}
  );

  return (
    <Card className="reminders">
      <Card.Content>
        <Card.Header>
          Watering Reminders <Image src={wateringcan} size="tiny" />{" "}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>{reminderInstances}</Feed>
      </Card.Content>
    </Card>
  );
}
