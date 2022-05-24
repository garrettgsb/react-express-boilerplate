import React, { useState } from 'react';
import '../../sass/login.scss';
import '../../sass/expenses.scss';
import {
  getGoalByID,
  getDataByID,
  getVacationData,
  filterSavingsDataPoints, 
  getCurrenciesOptions
} from '../../helpers/helper_functions';
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

  const goal = getGoalByID(props.goals, props.user)
  const dataPoints = getDataByID(props.dataPoints, props.user)



  const currencies = getCurrenciesOptions(props.currencySymbols); 

  let graphData = {
    updatePoints: [],
    total: '',
    trackLine: '',
    trackUnits: '',
    trackData: [],
    backgroundColor: '',
    borderColor: ''
  }

  if (!props.vacationMode) {

    graphData = {
      ...graphData,
      total: 'Savings',
      trackLine: goal.goal_name,
      trackUnits: 'month',
      trackData: [
        { x: goal.start_date, y: 0 },
        { x: goal.end_date, y: goal.amount / 100 }
      ],
      backgroundColor: '#FFA10A',
      borderColor: '#FFA10A'
    }

    graphData.updatePoints.push({ x: goal.start_date, y: 0 })

    filterSavingsDataPoints(dataPoints, 8).forEach(point => {
      graphData.updatePoints.push({ ...point, y: graphData.updatePoints.slice(-1)[0].y + (point.y / 100) })
    })
  } else if (props.vacationMode) {

    graphData = {
      ...graphData,
      total: 'Savings',
      trackLine: 'Budget',
      trackUnits: 'day',
      trackData: [
        { x: goal.start_date, y: goal.amount / 100 },
        { x: goal.end_date, y: 0 }
      ],
      backgroundColor: 'rgba(220, 38, 38, 0.7)',
      borderColor: 'rgba(220, 38, 38, 0.7)',
    }

    const vacationData = getVacationData(dataPoints, goal.start_date)
    graphData.updatePoints.push({ x: goal.start_date, y: goal.amount / 100 })

    vacationData.forEach(point => {
      graphData.updatePoints.push({ ...point, y: graphData.updatePoints.slice(-1)[0].y - (point.y / 100) })
    })

  }

  const [state, setState] = useState({
    dateUnit: graphData.trackUnits,
    dataPoints: graphData.updatePoints,
    currency: props.currentCurrency || 'CAD',
    exchangeRate: props.exchangeRates.rates[props.currentCurrency]
  })

  const data = {
    datasets: [
      {
        label: graphData.total,
        data: state.dataPoints,
        fill: false,
        backgroundColor: graphData.backgroundColor,
        borderColor: graphData.borderColor,
        tension: 0.1
      },
      {
        label: graphData.trackLine,
        data: graphData.trackData,
        fill: false,
        backgroundColor: 'limegreen',
        borderColor: 'limegreen',
        tension: 0.1
      }
    ]
  };

  return (
    <div className='d-flex justify-content-center row'>
      <div id='line' className='d-flex justify-content-center col rounded-3 mt-5'>
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
                    return parseInt(value * (state.exchangeRate || 1)) + ` ${state.currency}`;
                  }
                },
                beginAtZero: true
              }
            }
          }}
        />
      </div>
      <br />
      <div className='d-flex align-items-center m-2 justify-content-center' >

        {props.vacationMode &&
          <div className='d-flex align-items-center m-2 justify-content-center w-25'>
            <input
              className="form-control w-100"
              list="datalistOptions"
              id="exchange-search"
              value={props.currentCurrency}
              placeholder="Type to search currency..."
              onChange={e => {
                e.persist();
                console.log(e.target.value)
                props.changeCurrency(e.target.value)
                setState(prev => {
                  return { ...prev, currency: e.target.value, exchangeRate: props.exchangeRates.rates[e.target.value] }
                })
              }}
            />
            <datalist id="datalistOptions">
              {currencies}
            </datalist>
          </div>
        }
        <select
          className="select rounded-2 form-select form-select-md w-25 d-flex align-items-center m-2 justify-content-center"
          value={state.dateUnit}
          onChange={e => setState({ ...state, dateUnit: e.target.value })}>
          <option value="day">Days</option>
          <option value="week">Weeks</option>
          <option value="month">Months</option>
          <option value="quarter">Quarterly</option>
          <option value="year">Years</option>
        </select>
        <button
          className='btn btn-primary m-2 gradient-custom-4 submit text-dark'
          onClick={() => props.back()
          }>
          Back
        </button>
      </div>
    </div>
  );
}