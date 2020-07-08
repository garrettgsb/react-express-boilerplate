import React from "react";
import { VictoryPie } from "victory";
import Card from "./Card";

export default function WarrantyDashboard(props) {
  const { warranties } = props;
  // Pie logic
  let categories = warranties.map((warranty) => {
    return warranty.item_category;
  });
  let filteredCategories = categories.filter(
    (category, index) => categories.indexOf(category) === index
  );
  let dataObj = {};
  filteredCategories.forEach((category) => (dataObj[category] = 0));

  warranties.forEach((warranty) => {
    dataObj[warranty.item_category]++;
  });
  let data = [];
  for (let category in dataObj) {
    data.push({ x: category, y: dataObj[category] });
  }
  // Card logic
  function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
  function monthDiffFromNow(d1) {
    return monthDiff(new Date(parseInt(d1, 10)), new Date(Date.now()));
  }

  let greenWarranties = warranties.filter((warranty) => {
    return (
      monthDiffFromNow(warranty.start_date) / warranty.duration_in_months <=
      0.25
    );
  }).length;

  let yellowWarranties = warranties.filter((warranty) => {
    return (
      monthDiffFromNow(warranty.start_date) / warranty.duration_in_months <=
        0.75 &&
      monthDiffFromNow(warranty.start_date) / warranty.duration_in_months > 0.25
    );
  }).length;

  let redWarranties = warranties.filter((warranty) => {
    return (
      monthDiffFromNow(warranty.start_date) / warranty.duration_in_months >=
      0.75
    );
  }).length;

  return (
    <div style={{ width: "60%" }}>
      <VictoryPie data={data} height={200} style={{ width: "50%" }} />
      <Card
        title="Total Warranties"
        total={warranties.length}
        icon={"fa fa-file-text fa-5x"}
      />
      <Card
        title="Total Safe"
        total={greenWarranties}
        icon={"fa fa-file-text fa-5x"}
      />
      <Card
        title="Total Caution"
        total={yellowWarranties}
        icon={"fa fa-file-text fa-5x"}
      />
      <Card
        title="Total Danger"
        total={redWarranties}
        icon={"fa fa-file-text fa-5x"}
      />
    </div>
  );
}
