import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Checkbox, Feed, Label, Icon } from "semantic-ui-react";

export default function ReminderGroup({ checkboxClass, label, reminders, setWatered }) {

  const reminderInstances = reminders.map((reminder) => {
    const manydaysLeft = `${reminder.nickname} in ${reminder.timeRemaining} days`;
    const oneDayleft = `${reminder.nickname} in ${reminder.timeRemaining} day`;
    const oneDayOver = `${reminder.nickname} is overdue by ${Math.abs(
      reminder.timeRemaining
    )} day!`;
    const manyDaysOver = `${reminder.nickname} is overdue by ${Math.abs(
      reminder.timeRemaining
    )} days!`;

    let daysLeft = manydaysLeft;
    if (reminder.timeRemaining < 2 && reminder.timeRemaining > 0) {
      daysLeft = oneDayleft;
    } else if (reminder.timeRemaining > -2 && reminder.timeRemaining < 0) {
      daysLeft = oneDayOver;
    } else if (reminder.timeRemaining < -2) {
      daysLeft = manyDaysOver;
    }

    const onChange = () => {
      // setWatered(reminder.plant_id);
      reminder.editWatered();
      document.querySelector(`label[for=reminder-${reminder.plant_id}]`).classList.add("strikethrough");
    };

    return (
      <>
      <Checkbox
        className={"checkbox " + checkboxClass}
        id={`reminder-${reminder.plant_id}`}
        label={daysLeft}
        onChange={onChange}
      />
      {/* {watered === reminder.plant_id &&
           <Label color='blue' floating>
          <Icon name='tint' />
         </Label>
      }  */}
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
