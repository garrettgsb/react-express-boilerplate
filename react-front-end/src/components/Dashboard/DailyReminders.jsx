import React from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Checkbox, Image, Card, Feed, Segment, Header, Icon, Button } from "semantic-ui-react";
import wateringcan from "../../assets/wateringcan.png";
import dayjs from "dayjs";
import ReminderGroup from "./ReminderGroup";
import { getUserReminders } from "../../helpers/selectors";
const relativeTime = require("dayjs/plugin/relativeTime");

export default function DailyReminders({ plants, reminders, userId }) {

  // const userNum = Number(userId);

  const remindersWithTime = reminders.map((reminder) => {
    const date1 = dayjs(new Date());
    return {
      ...reminder, timeRemaining: reminder.watering_interval - date1.diff(reminder.last_watered, "day")
    }
  })

  const dailyReminders = remindersWithTime.filter(element => element.timeRemaining < 1);
  const tomorrowReminders = remindersWithTime.filter(element => element.timeRemaining > 2);

  const dailyUserReminders = getUserReminders(userId, dailyReminders);
  const tomorrowUserReminders = getUserReminders(userId, tomorrowReminders);

  return (
    <>
      <Button floated="right" as="h4" color={`${dailyUserReminders.length > 0 ? "red" : "blue"}`}>
        <Icon name="rain" />Watering Reminders: 
        {dailyUserReminders.length > 0 ? " You have a reminder!" : " Your day looks clear. Enjoy!"}
        {!dailyUserReminders && tomorrowUserReminders.length > 0 ? "Upcoming watering tomorrow!" : ""}
      </Button>
    </>
  );
}
