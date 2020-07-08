import React from "react";
import { Progress } from "semantic-ui-react";

export default function WarrantyListItem(props) {
  const {
    item_name,
    days_prior,
    item_category,
    duration_in_months,
    start_date,
  } = props.warranty;
  // refactor
  let day1 = new Date(parseInt(start_date, 10));
  let day2 = new Date(Date.now());
  function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
  // console.log(monthDiff(day1, day2));
  // console.log(day2);
  let passedMonths = monthDiff(day1, day2);
  let status = [false, false, false];
  if (passedMonths / duration_in_months > 0.75) {
    status[0] = true;
  } else if (passedMonths / duration_in_months > 0.25) {
    status[1] = true;
  } else {
    status[2] = true;
  }
  let icon;
  switch (item_category) {
    case "Groceries":
      // code block
      icon = "fa fa-shopping-cart";
      break;
    case "Mobile":
      // code block
      icon = "fa fa-mobile";
      break;
    case "Appliance":
      // code block
      icon = "fa fa-plug";
      break;
    case "Electronics":
      // code block
      icon = "fa fa-laptop";
      break;
    case "Transportation":
      // code block
      icon = "fa fa-bus";
      break;
    default:
      // code block
      icon = "fa fa-user-o";
  }
  return (
    <tr>
      <td>
        <i class={icon} aria-hidden="true"></i>
      </td>
      <td>{item_name}</td>
      <td style={{ width: "600px" }}>
        {" "}
        <Progress
          value={passedMonths}
          total={duration_in_months}
          progress="ratio"
          error={status[0]}
          warning={status[1]}
          success={status[2]}
        />
      </td>
      <td>
        <button onClick={(e) => props.setCurrentItem({ name: item_name })}>
          <i class="fa fa-info-circle" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  );
}
