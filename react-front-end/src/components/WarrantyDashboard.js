import React from "react";
import { VictoryPie } from "victory";

export default function WarrantyDashboard(props) {
  const { warranties } = props;
  let categories = warranties.map((warranty) => {
    return warranty.item_category;
  });
  let filteredCategories = categories.filter(
    (category, index) => categories.indexOf(category) === index
  );
  let dataObj = {};
  filteredCategories.forEach((category) => (dataObj[category] = 0));
  // let data = filteredCategories.map((category) => ({ [category]: 0 }));
  console.log(dataObj);

  warranties.forEach((warranty) => {
    dataObj[warranty.item_category]++;
  });
  console.log(dataObj);
  let data = [];
  for (let category in dataObj) {
    data.push({ x: category, y: dataObj[category] });
  }

  console.log(data);

  return (
    <div style={{ width: "60%" }}>
      <VictoryPie
        data={data}
        // animate={{
        //   duration: 2000,
        // }}
        // radius={({ datum }) => 5 + datum.y * 5}
        height={200}
        style={{ width: "50%" }}
        // width={90}
      />
    </div>
  );
}
