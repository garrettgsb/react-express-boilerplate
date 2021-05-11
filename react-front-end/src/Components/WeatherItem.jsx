import React from "react";
import moment from "moment";

const kelvinToCelcius = (K) => {
  return Math.round((K - 273.15));
}

const getDay = (dte) => {
  return moment(dte*1000).format('dddd');
}

export default function WeatherItem(props) {
  return (
    <main>
      <p>
        {getDay(props.dte)}
      </p>
      <li>
        {props.description}
      </li>
      <img src={`http://openweathermap.org/img/w/${props.icon}.png`} />
      <p>
        <strong>{kelvinToCelcius(props.tempMax)}&deg;C / {kelvinToCelcius(props.tempMin)}&deg;C</strong>
      </p>
    </main>
  );
}