import React, { useState } from 'react';
import { getSavingsByID, getGoalByID } from '../../helpers/helper_functions';
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  TimeScale
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  TimeScale);

export default function LineGraph(props) {

  const { user, goals, expenses, back } = props;

  const [state, setState] = useState({
    dateUnit: 'month'
  })
  // let dateUnit = 'month';

  const savingsDataPoints = [
    { x: goals[0].start_date, y: 0 }
  ];
  const savings = getSavingsByID(expenses, user)
  const goal = getGoalByID(goals, user)[0]

  savings.forEach(item => {
    savingsDataPoints.push({ x: item.created_at, y: item.amount })
  });

  const data = {
    datasets: [
      {
        label: 'Savings',
        data: savingsDataPoints,
        fill: false,
        backgroundColor: 'rgba(220, 38, 38, 0.7)',
        borderColor: 'rgba(220, 38, 38, 0.7)',
        tension: 0.1
      },
      {
        label: 'Goal',
        data: [
          { x: goal.start_date, y: 0 },
          { x: goal.end_date, y: goal.amount }
        ],
        fill: false,
        backgroundColor: 'limegreen',
        borderColor: 'limegreen',
        tension: 0.1
      }
    ]
  };

  return (
    <div>
      <div id='line'>
        <Line
          data={data}
          height={400}
          width={400}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: state.dateUnit
                }
              },
              y: {
                ticks: {
                  // Include a dollar sign in the ticks
                  callback: function (value, index, ticks) {
                    return '$' + value.toFixed(2) / 100;
                  }
                }
              }
            }
          }}
        />
      </div>
      <br />
      <div className='d-flex align-items-center justify-content-center' >
        <label className="visually-hidden" htmlFor="inlineFormSelectPref">Category</label>
        <select
          className="select"
          value={state.dateUnit}
          onChange={e => setState({ ...state, dateUnit: e.target.value})}>
          <option value="day">Days</option>
          <option value="week">Weeks</option>
          <option value="month">Months</option>
          <option value="quarter">Quarterly</option>
          <option value="year">Years</option>
        </select>
        <button
          className='btn btn-primary'
          onClick={() => back()
          }>
          Back
        </button>
      </div>
    </div>
  );
}