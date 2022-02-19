import React from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Checkbox, Image, Card, Feed } from "semantic-ui-react";
import wateringcan from "../../assets/wateringcan.png";
import dayjs from "dayjs";
import ReminderGroup from "./ReminderGroup";
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
      ...reminder, timeRemaining: reminder.watering_interval - date1.diff(reminder.last_watered, "day"), editWatered: () => editWatered(reminder.plant_id)
    }
  })

  const overdueReminders = remindersWithTime.filter(element => element.timeRemaining < 0)
  const comingdueReminders = remindersWithTime.filter(element => element.timeRemaining > 0 && element.timeRemaining < 6)
  const notdueReminders = remindersWithTime.filter(element => element.timeRemaining > 6)



  return (
    <Card className="reminders">
      <Card.Content>
        <Card.Header>
          Watering Reminders <Image src={wateringcan} size="tiny" />{" "}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <ReminderGroup label={"Overdue! Please water your baby!"} reminders={overdueReminders} />
          <ReminderGroup label={"Coming due"} reminders={comingdueReminders} />
          <ReminderGroup label={"Not yet due"} reminders={notdueReminders} />
        </Feed>
      </Card.Content>
    </Card>
  );
}
