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
  
  const goal = getGoalByID(props.goals, props.user)[0]
  const dataPoints = getDataByID(props.dataPoints)
  const [state, setState] = useState({
    dateUnit: 'month',
    dataPoints: dataPoints
  })

  
  // const savings = getSavingsByID(expenses, user)
  // const state.dataPoints = [];
  // savings.forEach(item => {
  //   if (state.dataPoints.length === 0) {
  //     setState(prev => {
  //       return {...prev, dataPoints: [{ x: item.created_at, y: item.amount }]}
  //     })
  //   }
  //     else {
  //       const allDataAmounts = state.dataPoints.map(expense => expense.amount);
  //       console.log('ALL AMOUNTS:', allDataAmounts)
  //       setState(prev => {
  //         return {...prev, dataPoints: [...prev.dataPoints, { x: item.created_at, y: allDataAmounts }]}
  //     })
  //   }
  // });

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
          onChange={e => setState({ ...state, dateUnit: e.target.value})}>
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