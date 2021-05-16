import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import useAppData from "../hooks/useAppData";

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
  const { id } = useParams();
  const { state, setState, markComplete } = useAppData();
  const [myHarvest, setMyHarvest] = useState([]);

  // const myHarvest = state.harvest.find(plot => plot.plot_id === id)

  // console.log('state.harvest', state.harvest)


  useEffect(() => {
    getPlotHarvest(id)
    console.log('test', state.harvest)
  }, [state])

  const getPlotHarvest = function (id) {
    const myInfo = state.harvest.filter(plant => plant.plot_id === parseInt(id) && plant.planted_date !== null);
    console.log('this crap is running again')
    setMyHarvest(myInfo)
  }
  // const myHarvest = state.harvest.filter(plant => plant.plot_id === parseInt(id) && plant.planted_date !== null);

  const removeHarvest = function (name) {
    const found = state.harvest.find(harvest => harvest.name === name);
    const newHarvest = state.harvest.filter(harvest => harvest !== found);
    setState({...state, harvest: newHarvest})
  }

  // getHarvestDate()

  const harvest_date = function (planted, harvest) {
  const harvest_date = moment(planted).add(harvest, 'days')
  const counter = moment(harvest_date).fromNow();
  return counter;
  }

  // console.log('myHarvest', myHarvest)

  return (
    <Card className={classes.root}>
      <CardContent className={classes.twidth}>
      <h2>Harvesting Schedule</h2>
        <table className={classes.twidth}>
          <thead >
            <tr >
              <th>Task</th>
              <th>Date</th>
              <th>Complete </th>
            </tr>
          </thead>
          <tbody >
          {myHarvest.filter(plant => plant.plot_id === parseInt(id) && plant.planted_date !== null).map(x => 
          <tr>
          <td>
              {x.name}
            </td>
            <td>
              {harvest_date(x.planted_date, x.harvest_date)}
            </td>
            <td>
            <CardActions>
              <Button size="small" variant="contained" 
              onClick={() => removeHarvest(x.name)}
              color="primary">Complete</Button>
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