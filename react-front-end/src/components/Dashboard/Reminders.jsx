import React from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Image, Card, Feed, Label, Icon } from "semantic-ui-react";
import wateringcan from "../../assets/wateringcan.png";
import dayjs from "dayjs";
import ReminderGroup from "./ReminderGroup";
import { getUserReminders } from "../../helpers/selectors";
import { useState } from "react";

export default function Reminders({ plants, reminders, userId, setAppState }) {
  const [watered, setWatered] = useState();

  const editWatered = (plantId) => {
    setWatered(plants.find((plant) => plant.id === plantId));

    axios
      .patch(`/api/reminders/${plantId}`, { last_watered: new Date() })
      .then((response) => {
        console.log(response.data);
        console.log("rerereresponse.data", response.data[0]);
        setTimeout(() => {
          setAppState((prev) => {
            return {
              ...prev,
              reminders: [
                ...prev.reminders.filter(
                  (reminder) => reminder.plant_id !== plantId
                ),
                response.data[0],
              ],
            };
          });
          document.querySelector(`label[for=reminder-${plantId}]`).classList.remove("strikethrough");
          document.getElementById(`reminder-${plantId}`).checked = false;
        }, 1200);

        setTimeout(() => setWatered(null), 1200);
      });
  };

  const userReminders = getUserReminders(userId, reminders);

  const remindersWithTime = userReminders.map((reminder) => {
    const date1 = dayjs(new Date());
    return {
      ...reminder,
      timeRemaining:
        reminder.watering_interval - date1.diff(reminder.last_watered, "day"),
      editWatered: () => editWatered(reminder.plant_id),
    };
  });

  const overdueReminders = remindersWithTime
    .filter((element) => element.timeRemaining < 0)
    .sort((a, b) => a.timeRemaining - b.timeRemaining);
  const comingdueReminders = remindersWithTime
    .filter((element) => element.timeRemaining > 0 && element.timeRemaining < 6)
    .sort((a, b) => a.timeRemaining - b.timeRemaining);
  const notdueReminders = remindersWithTime
    .filter((element) => element.timeRemaining > 6)
    .sort((a, b) => a.timeRemaining - b.timeRemaining);

  return (
    <Card className="reminders">
      <Card.Content>
        <Card.Header>
          Watering Reminders <Image src={wateringcan} size="tiny" />{" "}
        </Card.Header>
        
        {watered && ( <>
          <br></br>
          <Label className="watered-feedback" icon="tint" as="a" color="blue" tag>
            <Icon name="tint" />
            You watered {watered.nickname}!
          </Label>
          </>
        )}
      </Card.Content>
      <Card.Content>
        <Feed>
          <ReminderGroup
            checkboxClass="overdue"
            label={"Overdue! Please water your baby!"}
            reminders={overdueReminders}
          />
          <ReminderGroup label={"Coming soon"} reminders={comingdueReminders} />
          <ReminderGroup label={"Not yet due"} reminders={notdueReminders} />
        </Feed>
      </Card.Content>
    </Card>
  );
}
