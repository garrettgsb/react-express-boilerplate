import React from 'react';
import { ArcElement, Chart, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {

  const hardProps = {
    goalName: 'GOAL',
    totalSaved: 'TOTALSAVED'
  }

  const data = {
    labels: [
      hardProps.goalName,
      hardProps.totalSaved
    ],
    datasets: [{
      label: 'Savings',
      data: [15, 15],
      backgroundColor: [
        'rgb(255,140,0)',
        'rgb(0, 0, 0, 0.5)'
      ],
      borderColor: ['rgb(255,215,0)',
        'rgb(220,220,220)'],
      hoverOffset: 4
    }
    ]
  };

  return (
    <div id='pie'>
      <Pie
        key='pie'
        data={data}
        width={400}
        height={400}
        options={{
          maintainAspectRatio: false,
          responsive: true
        }}
      />
    </div>
  );
}

export default PieChart