import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Planting from "./Planting";
import Maintenance from "./Maintenance";
import Harvest from "./Harvest";
import Weather from "./Weather/Weather";


const useStyles = makeStyles({
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
});



export default function Dashboard() {
  const classes = useStyles();


  return (
    <main className={classes.column}>
        <Planting />
      <section className={classes.row}>
        <Maintenance />
        <Harvest />
      </section>
      <section>
        <Weather />
      </section>
    </main>
  )
}