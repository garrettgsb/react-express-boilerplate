import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// const db = require('../../../express-back-end/db/lib/db')
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
const moment = require('moment');
const axios = require('axios');




const useStyles = makeStyles({
  root: {
    width: 400,
    marginLeft: '7%',
    marginTop: '7%',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',

    // justifyContent: 'space-between'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  heads: {
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'space-around',
  },
  twidth: {
    flex: 1,
    width: '100%'
  }
});




// test to map over all planted veg and calculate harvest dates


  



export default function Harvest() {
  const classes = useStyles();
  const [harvest, getHarvest] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getHarvestDate(id)
  }, [])


    // Grabs harvest dates. Calculates time till harvest.
  const getHarvestDate = function() {
    axios.get(`/api/plots_vegs`)
    .then(res => {
      getHarvest(res.data)
    })
    .catch(err => console.log(err));
  }

  // getHarvestDate()

  const harvest_date = function (planted, harvest) {
  const harvest_date = moment(planted).add(harvest, 'days')
  const counter = moment(harvest_date).fromNow();
  return counter;
  }

  // const test = function() {
  // getHarvestDate().then(res => {
  //   res.map(x => {
  //     harvest_date(x.planted_date, x.harvest_date)
  //   }) 
  // })
  // }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.twidth}>
      <h2>Harvesting Schedule</h2>
        <table className={classes.twidth}>
          <thead >
            <tr >
              <th>Task</th>
              <th>Date</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody >
          {harvest.map(x => 
          <tr>
          <td>
              {x.name}
            </td>
            <td>
              {harvest_date(x.planted_date, x.harvest_date)}
            </td>
            <td>
            <CardActions>
              <Button size="small" variant="contained" color="primary">Complete</Button>
            </CardActions>
            </td>
          </tr>
            )}
          </tbody>
          
        </table>
      </CardContent>
    </Card>
  );
}