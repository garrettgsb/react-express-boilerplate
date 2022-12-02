import React, {useEffect, useState} from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import Axios from "axios";

export const Heatmap = () => {
  const [data, setData] = useState([])


  useEffect(() => {
    Axios.get("http://localhost:8080/api/workoutlogs")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <ResponsiveCalendar
      data={data}
      from="2022-01-01"
      to="2022-12-25"
      emptyColor="#eeeeee"
      maxValue={1}
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      isInteractive={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
    />
  );
};
