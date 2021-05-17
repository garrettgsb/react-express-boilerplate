import React, { useState, useEffect } from 'react';
import useAppData from "../hooks/useAppData";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import './Planting.scss';

const axios = require('axios');

export default function Planting() {
  const [plants, setPlants] = useState([]);
  let { id } = useParams();
  const { state, markComplete, plant } = useAppData();


  useEffect(() => {
    getPlotVeg(id)
  }, [state]);

  // get tasks per plots_vegs.
  const getPlotVeg = function (plotID) {
    return axios.get(`/api/plots/${plotID}`)
      .then(res => {
        const notPlanted = res.data.filter(plant => plant.plot_id === parseInt(id));
        setPlants(notPlanted)
      })
      .catch(err => console.log(err));
  }

  const isPlanted = function (plant) {
    return (plant ? true : false)
  }

  // const removePlanting = function (name) {
  //   const found = plants.find(task => task.name === name );
  //   const newPlants = plants.filter(task => task !== found);
  //   setPlants(newPlants);
  // }

  return (
    <Card className="root">
      <CardContent className="twidth">
        <h2>Planting Instructions</h2>
        <table className="plant-instructions">
          <thead >
            <tr >
              <th></th>
              <th>Vegetable</th>
              <th>Sunlight</th>
              <th>Spacing</th>
              <th>Depth</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody className="body">
            {plants.map((x, i) =>
              <tr className={isPlanted(x.planted_date) ? "strike" : ""}>
                <td >
                  <img
                    className="avatar"
                    src={x.avatar_url}
                    alt="img"
                  />
                </td>
                <td>
                  <strong>{x.name}</strong>
                </td>
                <td>
                  <strong>{x.sun_required} hours per day</strong>
                </td>
                <td>
                  <strong>{x.space} inches</strong>
                </td>
                <td>
                  <strong>{x.depth}cm</strong>
                </td>
                <td>
                  <input
                    type="checkbox"
                    onClick={() => {markComplete(plants[i]); 
                      // removePlanting(x.name);
                      plant(x.id)}}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}