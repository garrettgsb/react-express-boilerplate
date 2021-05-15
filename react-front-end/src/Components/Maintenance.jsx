import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useAppData from "../hooks/useAppData";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
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
  const { buildTasks } = useAppData();
  let { id } = useParams();

  
  useEffect(() => {
    getPlotTasks(id)
  }, [])

  // get tasks per plots_vegs.
  const getPlotTasks = function(plotID) {
    return axios.get(`/api/plots_vegs/${plotID}`)
    .then(res => {
      const temp = buildTasks(res.data)
      setTasks(temp)
    })
    .catch(err => console.log(err));
  }
  
  const removeTask = function (name, time) {
    const found = tasks.find(task => task.name === name && task.time === time);
    const newTasks = tasks.filter(task => task !== found);
    setTasks(newTasks);
  }
    
  return (
    <Card className={classes.root}>
      <CardContent className={classes.twidth}>
        <h2>Garden Chores</h2>
        <table className={classes.twidth}>
          <thead >
            <tr >
              <th>Task</th>
              <th>Date</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
          {tasks.map(x => 
          <tr>
            <td>
              {x.name}
            </td>
            <td>
            {x.time}
            </td>
            <td>
            <CardActions>
              <Button size="small" 
              onClick={() => removeTask(x.name, x.time)} 
              variant="contained" color="primary">Complete</Button>
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