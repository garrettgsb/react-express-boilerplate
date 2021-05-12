import React from "react";
import Card from '@material-ui/core/Card';
import './WeatherItem.scss';
// import moment from "moment";
const moment = require('moment');

const kelvinToCelcius = (K) => {
  return Math.round((K - 273.15));
}

const getDayName = (dte) => {
  return moment(dte * 1000).format('dddd');
}

const getDay = (dte) => {
  return moment(dte * 1000).format("MMM Do");
}

export default function WeatherItem(props) {

  return (
    <Card className="weatherCard">
      <main className="row">
        <section className="column">
          <div>
            <strong>{getDayName(props.dte)}</strong>
            <div>{getDay(props.dte)}</div>
          </div>
          <div className="weatherName">
            {props.description}
          </div>
          <img className="weatherIcon" src={`http://openweathermap.org/img/w/${props.icon}.png`} alt={''}/>
          <div>
            <strong>{kelvinToCelcius(props.tempMax)}&deg;C / {kelvinToCelcius(props.tempMin)}&deg;C</strong>
          </div>
        </section>
      </main>
    </Card>
  );
}