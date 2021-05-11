import React from "react";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
// import moment from "moment";
const moment = require('moment');


const useStyles = makeStyles({
  weatherCard: {
    margin: '5px',
    minWidth: '110px',
    maxWidth: '110px',
    width: '110px',
    textAlign: 'center'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center'
  },
  weatherName: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '10px',
    marginLeft: '20px',
    marginRight: '20px',
    textAlign: 'center'
  },
  weatherIcon: {
    margin: '10px'
  }
});

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
  const classes = useStyles();

  return (
    <Card className={classes.weatherCard}>
      <main className={classes.row}>
        <section className={classes.column}>
          <div>
            <strong>{getDayName(props.dte)}</strong>
            <div>{getDay(props.dte)}</div>
          </div>
          <div className={classes.weatherName}>
            {props.description}
          </div>
          <img className={classes.weatherIcon} src={`http://openweathermap.org/img/w/${props.icon}.png`} alt={''}/>
          <div>
            <strong>{kelvinToCelcius(props.tempMax)}&deg;C / {kelvinToCelcius(props.tempMin)}&deg;C</strong>
          </div>
        </section>
      </main>
    </Card>
  );
}