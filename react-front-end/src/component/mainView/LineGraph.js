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

  const state = {
    users: [
      {
        "id": 1,
        "username": "Alvin",
        "email": "alvintest@hotmail.com",
        "password": "test123"
      },
      {
        "id": 2,
        "username": "Ricky",
        "email": "ricky2test@hotmail.com",
        "password": "test123"
      },
      {
        "id": 3,
        "username": "Kevin",
        "email": "kevin3test@hotmail.com",
        "password": "test123"
      }
    ],
    goals: [
      {
        "id": 1,
        "user_id": 1,
        "end_date": "2023-02-08T07:00:00.000Z",
        "amount": 3284932
      },
      {
        "id": 2,
        "user_id": 2,
        "end_date": "2023-05-04T06:00:00.000Z",
        "amount": 219638673
      },
      {
        "id": 3,
        "user_id": 3,
        "end_date": "2022-12-21T07:00:00.000Z",
        "amount": 323618
      }
    ],
    expenses: [
      {
        "id": 1,
        "user_id": 1,
        "created_at": "2021-12-29T07:00:00.000Z",
        "amount": 9928,
        "category_id": 6,
        "username": "Alvin",
        "email": "alvintest@hotmail.com",
        "password": "test123"
      },
      {
        "id": 3,
        "user_id": 3,
        "created_at": "2022-03-31T06:00:00.000Z",
        "amount": 190,
        "category_id": 10,
        "username": "Kevin",
        "email": "kevin3test@hotmail.com",
        "password": "test123"
      },
      {
        "id": 3,
        "user_id": 3,
        "created_at": "2021-06-29T06:00:00.000Z",
        "amount": 9048,
        "category_id": 9,
        "username": "Kevin",
        "email": "kevin3test@hotmail.com",
        "password": "test123"
      },
      {
        "id": 1,
        "user_id": 1,
        "created_at": "2021-03-22T06:00:00.000Z",
        "amount": 8329,
        "category_id": 3,
        "username": "Alvin",
        "email": "alvintest@hotmail.com",
        "password": "test123"
      }
    ]
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const savingsDataPoints = [
    {x: goals[0].start_date, y: 0},
    { x: '2020-03-21', y: 20000},
  ];
  const savings = getSavingsByID(expenses, user)
  console.log('EXPENSES:', expenses)
  console.log('SAVINGS:', savings)
  console.log('USER:', user)
  const goal = getGoalByID(goals, user)[0]

  // console.log('GOALS:', goals)
  // console.log('GOAL:', goal)
  // const getUserData = (state, user) => {

  // }

  // const getYearGuideData = (goals, id) => {
  //   const guideData = [0];
  //   const userExpenses = goals.filter(goal => goal.user_id === id);
  //   const guide = (getTotalAmount(userExpenses) / 12).toFixed(2) / 100;
  //   while (guideData.length <= 12) {
  //     guideData.push(guide + ((guideData.length - 1) * guide))
  //   }
  //   return guideData;
  // };

  // const yearGoalData = getYearGuideData(goals, user)
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
          {x: goal.start_date , y: 0},
          {x: goal.end_date, y: goal.amount}
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
                    callback: function(value, index, ticks) {
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