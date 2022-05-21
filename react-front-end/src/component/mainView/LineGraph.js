import React, { useState } from 'react';
import { getGoalByID, getDataByID } from '../../helpers/helper_functions';
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
  console.log('LINEPROPS:,', props )

  const goal = getGoalByID(props.goals, props.user)[0]
  const dataPoints = getDataByID(props.dataPoints, props.user)

  const updatePoints = []
  if (!props.vacationMode) {
    updatePoints.push({ x: goal.start_date, y: 0 })
    dataPoints.forEach(point => {
      if (updatePoints.slice(-1)[0]) {
        point = { ...point, y: (updatePoints.slice(-1)[0].y + point.y) }
      }
      updatePoints.push(point)
    })
  }
  const [state, setState] = useState({
    dateUnit: 'month',
    dataPoints: updatePoints
  })

  const data = {
    datasets: [
      {
        label: 'Savings',
        data: state.dataPoints,
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
          key='savingGraph'
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
                },
                beginAtZero: true
              },
              y: {
                ticks: {
                  // Include a dollar sign in the ticks
                  callback: function (value, index, ticks) {
                    return '$' + value.toFixed(2) / 100;
                  }
                },
                beginAtZero: true
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
          onChange={e => setState({ ...state, dateUnit: e.target.value })}>
          <option value="day">Days</option>
          <option value="week">Weeks</option>
          <option value="month">Months</option>
          <option value="quarter">Quarterly</option>
          <option value="year">Years</option>
        </select>
        <button
          className='btn btn-primary'
          onClick={() => props.back()
          }>
          Back
        </button>
      </div>
    </div>
  );
}