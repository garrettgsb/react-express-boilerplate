import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon, Button, Tab, Message, Segment } from "semantic-ui-react";
import wateringcan from "../../assets/wateringcan.png";
import dayjs from "dayjs";
import { getUserReminders } from "../../helpers/selectors";

export default function DailyReminders({ plants, reminders, userId, setIsVisible }) {
  const remindersWithTime = reminders.map((reminder) => {
    const date1 = dayjs(new Date());
    return {
      ...reminder,
      timeRemaining: reminder.watering_interval - date1.diff(reminder.last_watered, "day"),
    };
  });

  const dailyReminders = remindersWithTime.filter((element) => element.timeRemaining < 1);
  const tomorrowReminders = remindersWithTime.filter((element) => element.timeRemaining < 2 && element.timeRemaining >= 1);

  const dailyUserReminders = getUserReminders(userId, dailyReminders);
  const tomorrowUserReminders = getUserReminders(userId, tomorrowReminders);

  const panes = [
    {
      menuItem: "Today's Reminders",
      render: () => (
        <Message color={`${dailyUserReminders.length > 0 ? "red" : "blue"}`} >
          <Icon name="rain" />
          {dailyUserReminders.length > 0 ? " You have a reminder!" : " Your day looks clear. Enjoy!"}
        </Message>
      ),
    },
    {
      menuItem: "Tomorrow's Reminders",
      render: () => (
        <Message color={`${tomorrowUserReminders.length > 0 ? "red" : "grey"}`}>
          <Icon name="leaf" />
          {tomorrowUserReminders.length > 0 ? "Upcoming watering tomorrow!" : "No upcoming watering tomorrow!"}
        </Message>
      ),
    },
    {
      menuItem: "Edit Plants",
      render: () => (
        <>
          <Segment color="olive" stretched style={{ backgroundColor: "rgba(235, 235, 232, 0.90)" }}>
            <Button color="olive" onClick={() => setIsVisible(true)}>
              Add New Plant
            </Button>
            <Button color="grey">Delete Plant</Button>
          </Segment>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="notifications">
        <Tab panes={panes}
          menu={{ color: "grey", attached: false, tabular: false, size: "large", inverted: false, fontWeight: "bold", raised: true, backgroundColor: "rgba(235, 235, 232, 0.90)" }}
          />
      </div>
    </>
  );
}
