import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Checkbox, Feed } from "semantic-ui-react";

export default function ReminderGroup({ label, reminders }) {
  const reminderInstances = reminders.map((reminder) => {
    console.log("REEEEMINDERS", reminders);
    const daysLeft = `${reminder.nickname} in ${reminder.timeRemaining} days`;
    return (
      <Checkbox
        label={daysLeft}
        onChange={reminder.editWatered}
      />
    );
  });

  return (
    <Feed.Event>
      <Feed.Content>
        <Feed.Date content={label} />
        <Feed.Summary>
          {reminderInstances}
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  );
}
