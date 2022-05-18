import React from 'react';
import { getTotalAmount } from '../../helpers/helper_functions';
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

  // const getUserData = (state, user) => {

  // }

  const getYearGuideData = (goals, id) => {
    const guideData = [0];
    const userExpenses = goals.filter(goal => goal.user_id === id);
    const guide = (getTotalAmount(userExpenses) / 12).toFixed(2) / 100;
    while (guideData.length <= 12) {
      guideData.push(guide + ((guideData.length - 1) * guide))
    }
    return guideData;
  };

  const yearGoalData = getYearGuideData(goals, user)
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Savings',
        data: [10, 5, 80, 81, 56, 55, 40, 30],
        fill: false,
        backgroundColor: 'rgba(220, 38, 38, 0.7)',
        borderColor: 'rgba(0, 153, 246, 1)',
        tension: 0.1
      },
      {
        label: 'Goal',
        data: yearGoalData,
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
                type: 'time'
              }
            }
          }}
        />
      </div>
      <br />
      <div className='d-flex align-items-center justify-content-center' onClick={() => props.back()}>
        <button className='btn btn-primary'>Back</button>
      </div>
    </div>
  );
}