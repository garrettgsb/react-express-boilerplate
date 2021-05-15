import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import './Planting.scss';

const moment = require('moment');
const axios = require('axios');

const useStyles = makeStyles({
  root: {
    width: '90%',
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
  },
  avatar: {
    // minWidth: '20px',
    maxWidth: '35px',
    // minHeight: '20px',
    maxHeight: '35px',
  },
  complete_btn: {
    '&:hover': {
      color: 'green',
    }
  }
});

export default function Planting() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getPlotTasks(id)
  }, [])

  // get tasks per plots_vegs.
  const getPlotTasks = function (plotID) {
    return axios.get(`/api/plots_vegs/${plotID}`)
      .then(res => {
        console.log("res.data / maintenance", res.data)

        setTasks(res.data)
      })
      .catch(err => console.log(err));
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.twidth}>
        <h2>Planting Instructions</h2>
        <table className={classes.twidth}>
          <thead >
            <tr >
              <th>Avatar</th>
              <th>Name</th>
              <th>Instructions</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody >
            {tasks.map(x =>
              <tr>
                <td >
                  <img
                    className={classes.avatar}
                    src={x.avatar_url}
                    alt="img"
                  />
                </td>
                <td>
                  {x.name}
                </td>
                <td>
                  Sow seeds in sterile potting soil, in an area that gets about <strong>{x.sun_required} hours</strong> of sunlight per day. Wet the soil with warm water before planting the seeds and place the seeds at a <strong>depth of {x.depth}cm</strong>. Fill the hole with amended soil, use a spray bottle to wet the soil again and continue to water <strong>every {x.water_time} days</strong>.
                </td>
                <td>
                  <CardActions>
                    <IconButton
                      edge="start"
                      aria-label="complete"
                      className={classes.complete_btn}
                      color="secondary">
                      <CheckCircleOutlinedIcon />
                    </IconButton>
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