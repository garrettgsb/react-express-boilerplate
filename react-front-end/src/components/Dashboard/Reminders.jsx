import React from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Checkbox, Image, Card, Feed } from "semantic-ui-react";
import wateringcan from "../../assets/wateringcan.png";
import dayjs from "dayjs";
const relativeTime = require("dayjs/plugin/relativeTime");

export default function Reminders({ plants, reminders }) {
  const editWatered = (plantId) => {
    axios
      .patch(`/api/reminders/${plantId}`, { last_watered: new Date() })
      .then((response) => {
        console.log(response.data);
      });
  };

  const remindersWithTime = reminders.map((reminder) => {
    const date1 = dayjs(new Date());
    return  {
      ...reminder, timeRemaining: reminder.watering_interval - date1.diff(reminder.last_watered, "day")
    }
  })

  const overdueReminders = remindersWithTime.filter(element => element.timeRemaining < 0)
  const comingdueReminders = remindersWithTime.filter(element => element.timeRemaining > 0 && element.timeRemaining < 6)
  const notdueReminders = remindersWithTime.filter(element => element.timeRemaining > 6)

  const reminderInstances = reminders.map((reminder) => {
    console.log("REEEEMINDERS", reminders);

    const date1 = dayjs(new Date());
    const timeRemaining =
      reminder.watering_interval - date1.diff(reminder.last_watered, "day");
    console.log("DATE", date1.diff(reminder.last_watered, "day"));
    const daysLeft = `${reminder.nickname} in ${timeRemaining} days`;

    if (timeRemaining < 0) {
      return (
      <Feed.Event>
        <Feed.Content>
          <Feed.Date content="Overdue! Please, please water your baby!" />
          <Feed.Summary>
            <Checkbox
              label={daysLeft}
              onChange={() => editWatered(reminder.plant_id)}
            />
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
      )
    } else if (timeRemaining < 5 && timeRemaining > 0) {
      return (

              <Feed.Event>
        <Feed.Content>
          <Feed.Date content="Coming Soon" />
          <Feed.Summary>
            <Checkbox
              label={daysLeft}
              onChange={() => editWatered(reminder.plant_id)}
            />
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
      )
    } else {
    return (
      <Feed.Event>
        <Feed.Content>
          {/* <Feed.Date content="Coming Soon" /> */}
          <Feed.Summary>
            <Checkbox
              label={daysLeft}
              onChange={() => editWatered(reminder.plant_id)}
            />
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    );}
  });

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
