import React from 'react';
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,

} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip);

export default function LineGraph(props) {

  const state = {
    users: ['Alvin', 'Kevin', 'Ricky'],
    goals: [1, 2, 3],
    expenses: [
      {
        "id": 1,
        "user_id": 1,
        "created_at": "2021-12-29T07:00:00.000Z",
        "amount": 9928,
        "category_id": 6,
        "income": false
      },
      {
        "id": 5,
        "user_id": 1,
        "created_at": "2021-03-22T06:00:00.000Z",
        "amount": 8329,
        "category_id": 3,
        "income": false
      },
      {
        "id": 7,
        "user_id": 1,
        "created_at": "2021-08-27T06:00:00.000Z",
        "amount": 6745,
        "category_id": 8,
        "income": false
      },
      {
        "id": 11,
        "user_id": 1,
        "created_at": "2021-10-18T06:00:00.000Z",
        "amount": 9488,
        "category_id": 9,
        "income": true
      },
      {
        "id": 15,
        "user_id": 1,
        "created_at": "2021-03-04T07:00:00.000Z",
        "amount": 8109,
        "category_id": 11,
        "income": true
      }
    ],
    incomes: [],
    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  };

  const getTotalIncome = (state) => {
    
    const incomeList = state.expenses.map(expense => {
      return expense.amount
    })
    return incomeList.reduce((first, next) => first + next)    
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

  // const getGuideData = (state, id) => {

  // };
  // const getUserData = (state, id) => {

  // }

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'TESTING',
        data: [10, 5, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(220, 38, 38, 0.7)',
        borderColor: 'rgba(0, 153, 246, 1)',
        tension: 0.1
      },
      {
        label: 'Guide',
        data: [0, 10, 20, 30, 40],
        fill: false,
        backgroundColor: 'rgba(220, 38, 38, 0.7)',
        borderColor: 'rgba(0, 153, 246, 1)',
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
            responsive: true
          }}
        />
      </div>
      <br />
      <div className='d-flex align-items-center justify-content-center'>
        <button className='btn'>back</button>
      </div>
    </div>
  );
}