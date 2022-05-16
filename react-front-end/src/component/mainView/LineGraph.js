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

  const data = {
    labels: labels,
    datasets: [{
      label: 'TESTING',
      data: [10, 5, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgba(220, 38, 38, 0.7)',
      borderColor: 'rgba(0, 153, 246, 1)',
      tension: 0.1
    }]
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