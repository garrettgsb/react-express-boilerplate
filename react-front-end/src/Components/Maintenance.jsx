import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const axios = require('axios');

const useStyles = makeStyles({
  root: {
    width: 400,
    marginLeft: '10%',
    marginTop: '7%',
    display: 'flex',
    flexDirection: 'row',
    maxHeight: '300px',
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
    width: '100%',
    justifyContent: 'center'
  }
});

export default function Maintenance() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getPlotTasks()
  }, [])

  // get tasks per plots_vegs.
  const getPlotTasks = function() {
    axios.get(`/api/plots_vegs`)
    .then(res => {
      setTasks(res.data)
    })
    .catch(err => console.log(err));
  }

   // repeats each of the watering tasks 10 times
  const watering = function(tasks) {
      const waterdays = []
      tasks.map(x => {
        let name = x.name
        let time = x.water_time
        let i = 1
        while (i < 10) {
          let obj = {name: [name], time: time*i}
          waterdays.push(obj)
          i++
        }
      })
      return waterdays.sort((a, b) => (a.time > b.time) ? 1 : -1);
    }
    

  return (
    <Card className={classes.root}>
      <CardContent className={classes.twidth}>
        <h2>Watering Schedule</h2>
        <table className={classes.twidth}>
          <thead >
            <tr >
              <th>Task</th>
              <th>Date</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
          {watering(tasks).map(x => 
          <tr>
          <td>
              {x.name}
            </td>
            <td>
            {x.time}
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