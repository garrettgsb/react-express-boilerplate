import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Feed } from "semantic-ui-react";

export default function ReminderGroup({ checkboxClass, label, reminders }) {
  const reminderInstances = reminders.map((reminder) => {
    const manydaysLeft = `${reminder.nickname} in ${reminder.timeRemaining} days`;
    const oneDayleft = `${reminder.nickname} in ${reminder.timeRemaining} day`;
    const oneDayOver = `${reminder.nickname} is overdue by ${Math.abs(
      reminder.timeRemaining
    )} day!`;
    const manyDaysOver = `${reminder.nickname} is overdue by ${Math.abs(
      reminder.timeRemaining
    )} days!`;
    const dueToday = `${reminder.nickname} needs some water today`;

    let daysLeft = manydaysLeft;
    if (reminder.timeRemaining < 2 && reminder.timeRemaining > 0) {
      daysLeft = oneDayleft;
    } else if (reminder.timeRemaining > -2 && reminder.timeRemaining < 0) {
      daysLeft = oneDayOver;
    } else if (reminder.timeRemaining <= -2) {
      daysLeft = manyDaysOver;
    } else if (reminder.timeRemaining === 0) {
      daysLeft = dueToday;
    }

    const onChange = () => {
      reminder.editWatered();
      document
        .querySelector(`label[for=reminder-${reminder.plant_id}]`)
        .classList.add("strikethrough");
    };

    return (
      <>
        <div class={"ui checkbox " + checkboxClass}>
          <input
            id={`reminder-${reminder.plant_id}`}
            tabindex="0"
            type="checkbox"
            onChange={onChange}
          ></input>
          <label for={`reminder-${reminder.plant_id}`}>{daysLeft}</label>
        </div>
        <br></br>
      </>
    );
  });

  return (
    reminderInstances.length > 0 && (
      <Feed.Event>
        <Feed.Content>
          <Feed.Date className="top-label" content={label} />
          <Feed.Summary>{reminderInstances}</Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    )
  );
}
