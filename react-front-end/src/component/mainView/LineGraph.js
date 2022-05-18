import React from 'react';
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

  const dateUnit = 'month';
  
  const savingsDataPoints = [
    { x: goals[0].start_date, y: 0 }
  ];
  const savings = getSavingsByID(expenses, user)
  const goal = getGoalByID(goals, user)[0]

  savings.forEach(item => {
    savingsDataPoints.push({x: item.created_at, y: item.amount})
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
                  unit: dateUnit
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
      <div className='d-flex align-items-center justify-content-center' onClick={() => back()}>
        <button className='btn btn-primary'>Back</button>
      </div>
    </div>
  );
}