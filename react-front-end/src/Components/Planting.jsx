import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import useAppData from "../hooks/useAppData";
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
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },

  twidth: {
    flex: 1,
    width: '100%'
  },

  td: {
    margin: '50px',
  },

  avatar: {
    maxWidth: '35px',
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
  const [plants, setPlants] = useState([]);
  let { id } = useParams();
  const { state, markComplete } = useAppData();

  console.log('plating state', state)

  useEffect(() => {
    getPlotVeg(id)
  }, []);

  // get tasks per plots_vegs.
  const getPlotVeg = function (plotID) {
    return axios.get(`/api/plots_vegs/${plotID}`)
      .then(res => {
        setPlants(res.data)
        
      })
      .catch(err => console.log(err));
  }

  const removePlanting = function (name) {
    const found = plants.find(task => task.name === name );
    const newPlants = plants.filter(task => task !== found);
    setPlants(newPlants);
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.twidth}>
        <h2>Planting Instructions</h2>
        <table className={classes.twidth}>
          <thead >
            <tr >
              <th></th>
              <th>Name</th>
              <th>Instructions</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody className={classes.body}>
            {plants.map((x, i) =>
              <tr>
                <td >
                  <img
                    className={classes.avatar}
                    src={x.avatar_url}
                    alt="img"
                  />
                </td>
                <td>
                  <strong>{x.name}</strong>
                </td>
                <td>
                  Sow seeds in sterile potting soil, in an area that gets about <strong>{x.sun_required} hours</strong> of sunlight per day. Wet the soil with warm water before planting the seeds and place the seeds at a <strong>depth of {x.depth}cm</strong> and <strong>space {x.space} inches apart</strong>. Fill the hole with amended soil, use a spray bottle to wet the soil again and continue to water <strong>every {x.water_time} days</strong>.
                </td>
                <td>
                  <CardActions>
                    <IconButton
                      edge="start"
                      aria-label="complete"
                      className={classes.complete_btn}
                      color="secondary"
                      onClick={() => {markComplete(plants[i]); removePlanting(x.name)}}>
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