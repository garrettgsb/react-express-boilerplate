import React from "react";

import CanvasJSReact from "./canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function PieChart(props) {
  const languages = Object.keys(props.data);
  let total = 0;
  for (let language of languages) {
    total += props.data[language];
  }
  const points = languages.map((language) => {
    let percent = Math.round((props.data[language] / total) * 100);
    return { y: percent, label: language };
  });

  const options = {
    animationEnabled: true,
    title: {
      text: "Languages",
    },
    backgroundColor: "#00000000",
    data: [
      {
        type: "pie",
        startAngle: 50,
        showInLegend: "true",
        legendText: "{label}: {y}%",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: points,
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}
