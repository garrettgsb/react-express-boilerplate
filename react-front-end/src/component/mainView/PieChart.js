import React from 'react';
import { ArcElement, Chart, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {

  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      borderColor: ['rgba(220, 38, 38, 1)',
        'rgba(0, 153, 246, 1)'],
      hoverOffset: 4
    }]
  };

  return (
    <div>
      <h1>
        PIE sHart
      </h1>
      <Pie
        data={data}
        width={600}
        height={400}
      />
    </div>
  );
}

export default PieChart