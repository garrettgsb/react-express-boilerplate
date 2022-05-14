import React, {Component} from 'react';
import RC2 from '../../lib/index';

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

class Doughnut extends Component {
  render() {
    return (
      <RC2 data={data} type='doughnut' />
    );
  }
}

export default Doughnut;
