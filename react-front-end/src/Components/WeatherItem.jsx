import React from "react";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import moment from "moment";

const useStyles = makeStyles({
  root: {
    width: '1000px',
    height: '300px',
    marginLeft: '9%',
    marginTop: '7%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
  },
  heads: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  centerCard: {
    display: 'flex',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

const kelvinToCelcius = (K) => {
  return Math.round((K - 273.15));
}

const getDay = (dte) => {
  return moment(dte * 1000).format('dddd');
}

export default function WeatherItem(props) {
  const classes = useStyles();

  return (
    <Card>
      <main className={classes.row}>
        <section className={classes.column}>
          <p>
          <strong>{getDay(props.dte)}</strong>
          </p>
          <li>
            {props.description}
          </li>
          <img src={`http://openweathermap.org/img/w/${props.icon}.png`} />
          <p>
            <strong>{kelvinToCelcius(props.tempMax)}&deg;C / {kelvinToCelcius(props.tempMin)}&deg;C</strong>
          </p>
        </section>
      </main>
    </Card>
  );
}